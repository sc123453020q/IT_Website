Add-Type -AssemblyName System.IO.Compression.FileSystem

$sourceDirectory = Join-Path $PSScriptRoot '..\events data file'
$outputFile = Join-Path $PSScriptRoot '..\src\data\events.generated.json'
$eventGroups = @()

function Get-CellColumnIndex([string]$reference) {
  $letters = ($reference -replace '[^A-Z]', '')
  $index = 0
  foreach ($character in $letters.ToCharArray()) {
    $index = ($index * 26) + ([int]$character - [int][char]'A' + 1)
  }
  return $index - 1
}

function Convert-ExcelDate($value) {
  $number = 0.0
  if ([double]::TryParse([string]$value, [ref]$number) -and $number -gt 20000 -and $number -lt 80000) {
    return [DateTime]::FromOADate($number).ToString('dd MMM yyyy', [Globalization.CultureInfo]::InvariantCulture)
  }
  return [string]$value
}

Get-ChildItem $sourceDirectory -Filter '*.xlsx' | Sort-Object Name | ForEach-Object {
  $file = $_
  $archive = [IO.Compression.ZipFile]::OpenRead($file.FullName)
  try {
    $sharedStrings = @()
    $sharedEntry = $archive.GetEntry('xl/sharedStrings.xml')
    if ($sharedEntry) {
      $reader = [IO.StreamReader]::new($sharedEntry.Open())
      [xml]$sharedXml = $reader.ReadToEnd()
      $reader.Dispose()
      $sharedNamespace = [Xml.XmlNamespaceManager]::new($sharedXml.NameTable)
      $sharedNamespace.AddNamespace('x', 'http://schemas.openxmlformats.org/spreadsheetml/2006/main')
      foreach ($item in $sharedXml.SelectNodes('//x:si', $sharedNamespace)) {
        $sharedStrings += (($item.SelectNodes('.//x:t', $sharedNamespace) | ForEach-Object { $_.InnerText }) -join '')
      }
    }

    $sheetEntry = $archive.GetEntry('xl/worksheets/sheet1.xml')
    $reader = [IO.StreamReader]::new($sheetEntry.Open())
    [xml]$sheetXml = $reader.ReadToEnd()
    $reader.Dispose()
    $sheetNamespace = [Xml.XmlNamespaceManager]::new($sheetXml.NameTable)
    $sheetNamespace.AddNamespace('x', 'http://schemas.openxmlformats.org/spreadsheetml/2006/main')

    $rows = @()
    foreach ($rowNode in $sheetXml.SelectNodes('//x:sheetData/x:row', $sheetNamespace)) {
      $row = @{}
      foreach ($cell in $rowNode.SelectNodes('./x:c', $sheetNamespace)) {
        $valueNode = $cell.SelectSingleNode('./x:v', $sheetNamespace)
        $inlineNode = $cell.SelectSingleNode('./x:is/x:t', $sheetNamespace)
        if ($cell.t -eq 's' -and $valueNode) { $value = $sharedStrings[[int]$valueNode.InnerText] }
        elseif ($inlineNode) { $value = $inlineNode.InnerText }
        elseif ($valueNode) { $value = $valueNode.InnerText }
        else { $value = '' }
        if (-not [string]::IsNullOrWhiteSpace([string]$value)) {
          $row[(Get-CellColumnIndex $cell.r)] = ([string]$value).Trim()
        }
      }
      if ($row.Count -gt 0) { $rows += ,$row }
    }

    if ($rows.Count -lt 2) { return }
    $headers = @{}
    foreach ($key in $rows[0].Keys) {
      $header = ([string]$rows[0][$key]).Trim().ToLowerInvariant() -replace '[^a-z0-9]+', '_'
      if ($header) { $headers[$key] = $header.Trim('_') }
    }
    $records = @()
    foreach ($row in $rows | Select-Object -Skip 1) {
      $record = [ordered]@{}
      foreach ($column in $headers.Keys | Sort-Object) {
        if ($row.ContainsKey($column) -and -not [string]::IsNullOrWhiteSpace($row[$column])) {
          $value = $row[$column]
          if ($headers[$column] -match 'date') { $value = Convert-ExcelDate $value }
          $record[$headers[$column]] = $value
        }
      }
      if ($record.Count -gt 0) { $records += [pscustomobject]$record }
    }

    $eventGroups += [pscustomobject]@{
      source = $file.Name
      records = $records
    }
  }
  finally {
    $archive.Dispose()
  }
}

$json = $eventGroups | ConvertTo-Json -Depth 8
[IO.File]::WriteAllText($outputFile, $json, [Text.UTF8Encoding]::new($false))
Write-Output "Generated $outputFile with $($eventGroups.Count) event groups."
