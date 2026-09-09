import React from 'react';

export default function Loading() {
  return (
    <main
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#240a1e]/95 backdrop-blur-md"
      aria-label="Loading page"
      role="status"
    >
      <div className="flex flex-col items-center gap-5">
        {/* Animated loader */}
        <div className="relative h-20 w-20">
          <div className="loader h-20 w-20 rounded-full" />
          <div className="inner-circle absolute inset-0 rounded-full" />
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <p className="animate-pulse text-sm font-semibold tracking-[0.35em] text-white">
            LOADING
          </p>

          <span className="h-px w-10 bg-white/40" />
        </div>
      </div>

      <style>{`
        .loader {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            transparent,
            transparent 40%,
            #7a2fe3
          );
          animation: spin 1.5s linear infinite;
          box-shadow: 0 0 35px rgba(122, 47, 227, 0.35);
        }

        .loader::before {
          content: "";
          position: absolute;
          inset: 6px;
          background: #240a1e;
          border-radius: 50%;
        }

        .loader::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            transparent,
            transparent 40%,
            #7a2fe3
          );
          border-radius: 50%;
          filter: blur(18px);
          opacity: 0.6;
          z-index: -1;
        }

        .inner-circle {
          border-top: 2px solid rgba(255, 255, 255, 0.8);
          animation: spin-reverse 2s linear infinite;
          box-sizing: border-box;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loader,
          .inner-circle {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}