import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f6f4ef",
        ink: "#111111",
        line: "#d8d5cc",
        muted: "#6d6a63",
        cool: "#3858ff",
        warm: "#e6502f"
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        display: [
          "var(--font-space-grotesk)",
          "Space Grotesk",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        hairline: "inset 0 0 0 1px rgba(17,17,17,0.08)"
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        13: "0.13",
        14: "0.14",
        15: "0.15",
        16: "0.16",
        18: "0.18",
        22: "0.22",
        24: "0.24",
        28: "0.28",
        35: "0.35",
        42: "0.42",
        48: "0.48",
        55: "0.55",
        58: "0.58",
        62: "0.62",
        65: "0.65",
        78: "0.78",
        82: "0.82",
        85: "0.85",
        88: "0.88"
      }
    }
  },
  plugins: []
};

export default config;
