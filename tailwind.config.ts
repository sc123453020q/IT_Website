import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCE8",
        primary: {
          DEFAULT: "#0c60ef",
          hover: "#0a4dbe",
          light: "#eff6ff",
        },
        surface: {
          DEFAULT: "#ffffff",
          alt: "#f8fafc",
          muted: "#f1f5f9",
        },
        content: {
          DEFAULT: "#0f172a",
          muted: "#475569",
        },
        border: {
          DEFAULT: "#e2e8f0",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-merriweather)", "serif"],
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;