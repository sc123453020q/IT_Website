"use client";

import Link from "next/link";

interface PageBannerProps {
  title: string;
  description?: string;
}

export default function PageBanner({
  title,
  description,
}: PageBannerProps) {
  return (
    <section className="page-banner">
      {/* Decorative background elements */}
      <div className="page-banner-glow page-banner-glow-one" />
      <div className="page-banner-glow page-banner-glow-two" />

      <div className="page-banner-grid" />

      <div className="page-banner-circle page-banner-circle-one" />
      <div className="page-banner-circle page-banner-circle-two" />

      {/* Content */}
      <div className="page-banner-content">

        {/* Breadcrumb */}
        <div className="page-banner-breadcrumb">
          <Link href="/">Home</Link>

          <span className="page-banner-separator">
            /
          </span>

          <span>{title}</span>
        </div>

        {/* Title */}
        <div className="page-banner-title-wrap">
          <div className="page-banner-line" />

          <div>
            <h1>{title}</h1>

            {description && (
              <p className="page-banner-description">
                {description}
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}