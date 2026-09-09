import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

import LayoutWrapper from "@/components/layout/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IEM IT | Information Technology",
    template: "%s | IEM IT",
  },
  description:
    "Information Technology Department at the Institute of Engineering and Management, Kolkata.",
  keywords: [
    "IEM IT",
    "IEM Information Technology",
    "Institute of Engineering and Management",
    "IEM Kolkata",
    "Information Technology Department",
  ],
  authors: [{ name: "IEM IT" }],
  creator: "IEM IT",
  metadataBase: new URL("https://iem-it.vercel.app"),
  openGraph: {
    title: "IEM IT | Information Technology",
    description:
      "Explore academics, faculty, innovation initiatives, student activities and more at IEM IT.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}