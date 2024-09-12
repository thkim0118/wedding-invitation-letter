import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      pretendard: ["var(--font-pretendard)"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".flex-center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".typo-40-bold": {
          "font-size": "2.5rem",
          "font-weight": "700",
          "line-height": "3rem",
        },
        ".typo-32-bold": {
          "font-size": "2rem",
          "font-weight": "700",
          "line-height": "2.4rem",
        },
        ".typo-28-regular": {
          "font-size": "1.75rem",
          "font-weight": "400",
          "line-height": "2.45rem",
        },
        ".typo-32-regular": {
          "font-size": "2rem",
          "font-weight": "400",
          "line-height": "2.4rem",
        },
        ".typo-28-bold": {
          "font-size": "1.75rem",
          "font-weight": "700",
          "line-height": "2.45rem",
        },
        ".typo-24-bold": {
          "font-size": "1.5rem",
          "font-weight": "700",
          "line-height": "1.8rem",
        },
        ".typo-20-bold": {
          "font-size": "1.25rem",
          "font-weight": "700",
          "line-height": "1.75rem",
        },
        ".typo-18-semiBold": {
          "font-size": "1.125rem",
          "font-weight": "600",
          "line-height": "1.575rem",
        },
        ".typo-16-semiBold": {
          "font-size": "1rem",
          "font-weight": "600",
          "line-height": "1.4rem",
        },
        ".typo-16-regular": {
          "font-size": "1rem",
          "font-weight": "400",
          "line-height": "1.4rem",
        },
        ".typo-14-semiBold": {
          "font-size": "0.875rem",
          "font-weight": "600",
          "line-height": "1.225rem",
        },
        ".typo-14-regular": {
          "font-size": "0.875rem",
          "font-weight": "400",
          "line-height": "1.225rem",
        },
        ".typo-12-bold": {
          "font-size": "0.75rem",
          "font-weight": "700",
          "line-height": "1.05rem",
        },
        ".typo-12-regular": {
          "font-size": "0.75rem",
          "font-weight": "400",
          "line-height": "1.05rem",
        },
        ".typo-10-bold": {
          "font-size": "0.625rem",
          "font-weight": "700",
          "line-height": "0.875rem",
        },
      });
    }),
  ],
};
export default config;
