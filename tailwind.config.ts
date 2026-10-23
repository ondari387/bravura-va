import type { Config } from "tailwindcss";

// STRICT BRAND PALETTE — do not add colours outside this list.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      teal: { DEFAULT: "#0D292D" },
      aqua: { DEFAULT: "#59C4D0", pale: "#E5F8F8" },
      orange: { DEFAULT: "#FF981F" },
      offwhite: "#F8F9F5",
      white: "#FFFFFF",
      ink: { DEFAULT: "#10152E", muted: "#59686B" },
    },
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans Variable"', "system-ui", "sans-serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: { container: "1240px" },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      boxShadow: {
        card: "0 1px 2px rgba(13,41,45,0.04), 0 12px 32px -12px rgba(13,41,45,0.14)",
        lift: "0 2px 4px rgba(13,41,45,0.06), 0 24px 48px -16px rgba(13,41,45,0.22)",
      },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "none" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
      animation: { "fade-up": "fade-up .7s ease both", float: "float 6s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
