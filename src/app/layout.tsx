import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

import LayoutWrapper from "@/components/layout/LayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
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
        className={`${inter.variable} ${merriweather.variable} font-sans text-content bg-surface antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}