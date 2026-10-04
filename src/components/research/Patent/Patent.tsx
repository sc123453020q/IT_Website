"use client";

import React, { useState, useMemo } from "react";
import {
  FaSearch,
  FaFileContract,
  FaAward,
  FaGlobe,
  FaBuilding,
  FaDownload,
  FaTable,
  FaThLarge,
  FaFilter,
  FaCheckCircle,
  FaClock,
  FaLightbulb,
  FaExternalLinkAlt
} from "react-icons/fa";
import "./Patent.css";

export interface PatentItem {
  id: number;
  applicant: string;
  type: "Granted" | "Filed";
  inventors: string;
  topic: string;
  scope: "National" | "International";
  filingDate: string;
  publicationDate: string;
  grantingDate: string;
  proofDocument: string;
  proofUrl?: string;
}

export const patentData: PatentItem[] = [
  {
    id: 1,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Baisakhi Das",
    topic: "EDUKIOSK – OBE MONITORING TERMINAL",
    scope: "National",
    filingDate: "28-06-2025",
    publicationDate: "-",
    grantingDate: "-",
    proofDocument: "Patent.jpg",
    proofUrl: "https://iemcollege-my.sharepoint.com/personal/baisakhi_das_iem_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fbaisakhi%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPhD%5FBD%2FPatent%2Ejpg&parent=%2Fpersonal%2Fbaisakhi%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPhD%5FBD&ga=1",
  },
  {
    id: 2,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Granted",
    inventors: "Dr. Rupayan Das",
    topic: "A SCALABLE DATA GATHERING AND HYBRID CHARGING SYSTEM",
    scope: "National",
    filingDate: "08-01-2024",
    publicationDate: "08-04-2024",
    grantingDate: "24-02-2025",
    proofDocument: "Patent-Rupayan Das.pdf",
    proofUrl: "https://iemcollege-my.sharepoint.com/personal/rupayan_das_iem_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FGranted%2FPatent%2DRupayan%20Das%2Epdf&parent=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FGranted&ga=1",
  },
  {
    id: 3,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Mrinal Kanti Sarkar, Sanjay Kumar, Rupayan Das",
    topic: "A FRAMEWORK FOR ENSURING SECURE DATA STORAGE IN CLOUD COMPUTING",
    scope: "National",
    filingDate: "17-10-2025",
    publicationDate: "-",
    grantingDate: "-",
    proofDocument: "-",
  },
  {
    id: 4,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Rupayan Das, Pingal Saha, Soumalya Hajra",
    topic: "METHOD FOR HIDING AND DETECTING INFORMATION USING IMAGE STEGANOGRAPHY",
    scope: "National",
    filingDate: "15-09-2025",
    publicationDate: "17-03-2023",
    grantingDate: "-",
    proofDocument: "202311018175_IPR.pdf",
    proofUrl: "https://iemcollege-my.sharepoint.com/personal/rupayan_das_iem_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FPublished%2F202311018175%5FIPR%2Epdf&parent=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FPublished&ga=1",
  },
  {
    id: 5,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Rupayan Das, Sayantina Kundu, Kaustav Roy",
    topic: "METHOD FOR PREDICTION OF CRIME RATE USING SUPERVISED MACHINE LEARNING MODEL",
    scope: "National",
    filingDate: "19-11-2025",
    publicationDate: "17-03-2023",
    grantingDate: "-",
    proofDocument: "202311018047_IPR.pdf",
    proofUrl: "https://iemcollege-my.sharepoint.com/personal/rupayan_das_iem_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FPublished%2F202311018047%5FIPR%2Epdf&parent=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FPublished&ga=1",
  },
  {
    id: 6,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Prof. Rupayan Das, Adiryam Rajeev, Sougata Jana, Ayush Maji",
    topic: "METHOD FOR INTERPRETATION OF RISK FACTOR OF MATERNAL HEALTH USING MACHINE LEARNING TECHNOLOGY",
    scope: "National",
    filingDate: "02-10-2025",
    publicationDate: "18-03-2023",
    grantingDate: "-",
    proofDocument: "202311018473_IPR.pdf",
    proofUrl: "https://iemcollege-my.sharepoint.com/personal/rupayan_das_iem_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FPublished%2F202311018473%5FIPR%2Epdf&parent=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FPublished&ga=1",
  },
  {
    id: 7,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Prof. Rupayan Das, Isha Tyagi, Laxmi Raghav",
    topic: "METHOD FOR PREDICTION OF PERSONALITY USING MACHINE LEARNING MODEL",
    scope: "National",
    filingDate: "05-09-2025",
    publicationDate: "19-05-2023",
    grantingDate: "-",
    proofDocument: "202311020125_IPR.pdf",
    proofUrl: "https://iemcollege-my.sharepoint.com/personal/rupayan_das_iem_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FPublished%2F202311020125%5FIPR%2Epdf&parent=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FPublished&ga=1",
  },
  {
    id: 8,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Prof. Rupayan Das, Andrila Sarkar, Shivani Kumhar, Priyanshu Ghosh Chowdhury",
    topic: "METHOD FOR PERFORMING \"DOC HAND\" SYSTEM",
    scope: "National",
    filingDate: "22-10-2025",
    publicationDate: "19-05-2023",
    grantingDate: "-",
    proofDocument: "202311020118_IPR.pdf",
    proofUrl: "https://iemcollege-my.sharepoint.com/personal/rupayan_das_iem_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FPublished%2F202311020118%5FIPR%2Epdf&parent=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FPublished&ga=1",
  },
  {
    id: 9,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Puja Das, Moutushi Singh, S Rehan Ahmad, Rina Mohanka",
    topic: "UK design patent",
    scope: "National",
    filingDate: "23-02-2026",
    publicationDate: "-",
    grantingDate: "-",
    proofDocument: "-",
  },
  {
    id: 10,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Puja Das, Moutushi Singh, Avijit Bose, Kajari Sur",
    topic: "Utility Patent",
    scope: "National",
    filingDate: "26-01-2026",
    publicationDate: "-",
    grantingDate: "-",
    proofDocument: "-",
  },
  {
    id: 11,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Avijit Bose, Kajari Sur",
    topic: "Machine overheat detection and precaution system",
    scope: "National",
    filingDate: "25-10-2025",
    publicationDate: "-",
    grantingDate: "-",
    proofDocument: "-",
  },
  {
    id: 12,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Avijit Bose",
    topic: "Smart Video Surveillance System",
    scope: "National",
    filingDate: "25-10-2025",
    publicationDate: "-",
    grantingDate: "-",
    proofDocument: "-",
  },
  {
    id: 13,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Rupayan Das, Roshan Kumar, Esha Mishra, Dev Chouhan",
    topic: "Method for performing an optical character recognition",
    scope: "National",
    filingDate: "17-11-2023",
    publicationDate: "29-12-2023",
    grantingDate: "03-06-2026",
    proofDocument: "Patent-Jaipur-1_merged.pdf",
    proofUrl: "https://iemcollege-my.sharepoint.com/personal/rupayan_das_iem_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FGranted%2FPatent%2DJaipur%2D1%5Fmerged%2Epdf&parent=%2Fpersonal%2Frupayan%5Fdas%5Fiem%5Fedu%5Fin%2FDocuments%2FPatent%2FGranted&ga=1",
  },
  {
    id: 14,
    applicant: "IEM Kolkata (Salt Lake)",
    type: "Filed",
    inventors: "Shouryam, Kajari Sur, Moutushi Singh, Puja Das, S Rehan Ahmad",
    topic: "\"Smart Bottle with in-built Filter\"",
    scope: "International",
    filingDate: "25.06.2025",
    publicationDate: "-",
    grantingDate: "-",
    proofDocument: "-",
  },
];

export default function PatentComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Granted" | "Filed">("All");
  const [scopeFilter, setScopeFilter] = useState<"All" | "National" | "International">("All");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  // Filter logic
  const filteredPatents = useMemo(() => {
    return patentData.filter((patent) => {
      const matchesSearch =
        patent.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patent.inventors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patent.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patent.filingDate.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || patent.type === statusFilter;

      const matchesScope =
        scopeFilter === "All" || patent.scope === scopeFilter;

      return matchesSearch && matchesStatus && matchesScope;
    });
  }, [searchTerm, statusFilter, scopeFilter]);

  // Statistics
  const totalCount = patentData.length;
  const grantedCount = patentData.filter((p) => p.type === "Granted").length;
  const filedCount = patentData.filter((p) => p.type === "Filed").length;
  const internationalCount = patentData.filter((p) => p.scope === "International").length;

  return (
    <div className="patent-section-wrapper">
      <div className="patent-container">
        
        {/* =========================================================
           HEADER SECTION
        ========================================================= */}
        <div className="patent-heading">
          <span className="patent-badge">
            <FaLightbulb className="patent-badge-icon" /> INTELLECTUAL PROPERTY &amp; RESEARCH
          </span>
          <h2>
            Patents &amp; <span>Innovations</span>
          </h2>
          <p>
            Showcasing groundbreaking intellectual property, inventions, and patent filings by the faculty members and researchers of the Department of Information Technology.
          </p>
        </div>

        {/* =========================================================
           STATISTICS OVERVIEW CARDS
        ========================================================= */}
        <div className="patent-stats-grid">
          <div className="patent-stat-card">
            <div className="stat-icon-bg primary">
              <FaFileContract />
            </div>
            <div className="stat-info">
              <h3>{totalCount}</h3>
              <p>Total Patents</p>
            </div>
          </div>

          <div className="patent-stat-card">
            <div className="stat-icon-bg success">
              <FaAward />
            </div>
            <div className="stat-info">
              <h3>{grantedCount}</h3>
              <p>Granted Patents</p>
            </div>
          </div>

          <div className="patent-stat-card">
            <div className="stat-icon-bg info">
              <FaClock />
            </div>
            <div className="stat-info">
              <h3>{filedCount}</h3>
              <p>Filed Applications</p>
            </div>
          </div>

          <div className="patent-stat-card">
            <div className="stat-icon-bg warning">
              <FaGlobe />
            </div>
            <div className="stat-info">
              <h3>{internationalCount}</h3>
              <p>International Patents</p>
            </div>
          </div>
        </div>

        {/* =========================================================
           FILTER AND SEARCH CONTROLS BAR
        ========================================================= */}
        <div className="patent-controls-bar">
          <div className="patent-search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by invention, inventor, applicant..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchTerm("")}
              >
                ×
              </button>
            )}
          </div>

          <div className="patent-filter-group">
            {/* Status Filter */}
            <div className="filter-select-wrapper">
              <FaFilter className="filter-icon" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="patent-select"
              >
                <option value="All">All Statuses</option>
                <option value="Granted">Granted</option>
                <option value="Filed">Filed</option>
              </select>
            </div>

            {/* Scope Filter */}
            <div className="filter-select-wrapper">
              <FaGlobe className="filter-icon" />
              <select
                value={scopeFilter}
                onChange={(e) => setScopeFilter(e.target.value as any)}
                className="patent-select"
              >
                <option value="All">All Scope</option>
                <option value="National">National</option>
                <option value="International">International</option>
              </select>
            </div>

            {/* View Mode Toggle Button */}
            <div className="view-toggle-buttons">
              <button
                type="button"
                className={`view-btn ${viewMode === "table" ? "active" : ""}`}
                onClick={() => setViewMode("table")}
                title="Table View"
              >
                <FaTable />
              </button>
              <button
                type="button"
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                title="Grid Card View"
              >
                <FaThLarge />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="patent-results-count">
          Showing <span>{filteredPatents.length}</span> of {totalCount} patent entries
        </div>

        {/* =========================================================
           DATA DISPLAY (TABLE OR GRID)
        ========================================================= */}
        {filteredPatents.length === 0 ? (
          <div className="patent-empty-state">
            <FaSearch className="empty-icon" />
            <h3>No matching patents found</h3>
            <p>Try clearing your search terms or filters to view all records.</p>
            <button
              type="button"
              className="reset-filters-btn"
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("All");
                setScopeFilter("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "table" ? (
          /* TABLE VIEW */
          <div className="patent-table-card">
            <div className="patent-table-wrapper">
              <table className="patent-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Applicant Name</th>
                    <th>Status</th>
                    <th>Inventor Name(s)</th>
                    <th>Topic / Invention Name</th>
                    <th>Scope</th>
                    <th>Filing Date</th>
                    <th>Publication Date</th>
                    <th>Granted Date</th>
                    <th>Document</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatents.map((item, idx) => {
                    const targetUrl = item.proofUrl || (item.proofDocument && item.proofDocument !== "-" ? `/pdfs/${item.proofDocument}` : null);
                    return (
                      <tr
                        key={item.id}
                        className={item.type === "Granted" ? "row-granted" : ""}
                      >
                        <td className="row-num">{idx + 1}</td>
                        <td className="cell-applicant">
                          <span className="applicant-pill">
                            <FaBuilding className="pill-icon" />
                            {item.applicant}
                          </span>
                        </td>
                        <td className="cell-status">
                          <span
                            className={`status-badge ${
                              item.type === "Granted" ? "granted" : "filed"
                            }`}
                          >
                            {item.type === "Granted" ? (
                              <FaCheckCircle className="badge-icon" />
                            ) : (
                              <FaClock className="badge-icon" />
                            )}
                            {item.type}
                          </span>
                        </td>
                        <td className="cell-inventor">{item.inventors}</td>
                        <td className="cell-topic font-semibold">{item.topic}</td>
                        <td className="cell-scope">
                          <span
                            className={`scope-badge ${
                              item.scope === "International"
                                ? "international"
                                : "national"
                            }`}
                          >
                            {item.scope}
                          </span>
                        </td>
                        <td className="cell-date">{item.filingDate}</td>
                        <td className="cell-date">{item.publicationDate}</td>
                        <td className="cell-date highlight-date">
                          {item.grantingDate}
                        </td>
                        <td className="cell-doc">
                          {targetUrl ? (
                            <a
                              href={targetUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="doc-link-btn"
                              title={`View Document Proof: ${item.proofDocument}`}
                            >
                              <FaExternalLinkAlt className="doc-icon" />
                              <span>Proof</span>
                            </a>
                          ) : (
                            <span className="no-doc-tag">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* GRID CARD VIEW */
          <div className="patent-cards-grid">
            {filteredPatents.map((item, idx) => {
              const targetUrl = item.proofUrl || (item.proofDocument && item.proofDocument !== "-" ? `/pdfs/${item.proofDocument}` : null);
              return (
                <div
                  key={item.id}
                  className={`patent-item-card ${
                    item.type === "Granted" ? "granted-card" : ""
                  }`}
                >
                  <div className="card-top-bar">
                    <span className="card-index">Patent #{idx + 1}</span>
                    <div className="card-badges">
                      <span
                        className={`scope-badge ${
                          item.scope === "International"
                            ? "international"
                            : "national"
                        }`}
                      >
                        {item.scope}
                      </span>
                      <span
                        className={`status-badge ${
                          item.type === "Granted" ? "granted" : "filed"
                        }`}
                      >
                        {item.type === "Granted" ? (
                          <FaCheckCircle className="badge-icon" />
                        ) : (
                          <FaClock className="badge-icon" />
                        )}
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="card-topic-title">{item.topic}</h3>

                  <div className="card-detail-item">
                    <span className="detail-label">Inventors:</span>
                    <span className="detail-val inventors-list">{item.inventors}</span>
                  </div>

                  <div className="card-detail-item">
                    <span className="detail-label">Applicant:</span>
                    <span className="detail-val">{item.applicant}</span>
                  </div>

                  <div className="card-dates-row">
                    <div className="date-block">
                      <span className="date-lbl">Filed:</span>
                      <span className="date-val">{item.filingDate}</span>
                    </div>
                    {item.publicationDate !== "-" && (
                      <div className="date-block">
                        <span className="date-lbl">Published:</span>
                        <span className="date-val">{item.publicationDate}</span>
                      </div>
                    )}
                    {item.grantingDate !== "-" && (
                      <div className="date-block highlight">
                        <span className="date-lbl">Granted:</span>
                        <span className="date-val">{item.grantingDate}</span>
                      </div>
                    )}
                  </div>

                  {targetUrl && (
                    <div className="card-footer-action">
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-doc-btn"
                      >
                        <FaExternalLinkAlt /> View Document Proof ({item.proofDocument})
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
