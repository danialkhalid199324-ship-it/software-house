import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0B0E", // dark section base
        graphite: "#14161C", // dark surface / cards on ink
        carbon: "#1D2029", // borders on ink
        paper: "#FFFFFF",
        fog: "#F5F6F8", // light alternate surface
        signal: {
          DEFAULT: "#5A5FF5", // primary accent
          soft: "#EEEFFE",
          deep: "#3E43D8",
        },
        pulse: "#22D3EE", // cyan — gradients & beams only
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        wrap: "76rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,11,14,0.06), 0 8px 24px -12px rgba(10,11,14,0.12)",
        lift: "0 2px 4px rgba(10,11,14,0.06), 0 20px 48px -16px rgba(10,11,14,0.22)",
        glow: "0 0 0 1px rgba(90,95,245,0.25), 0 12px 48px -8px rgba(90,95,245,0.35)",
      },
      keyframes: {
        beam: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        beam: "beam 7s cubic-bezier(0.4,0,0.2,1) infinite",
        blink: "blink 1.1s step-end infinite",
        marquee: "marquee 36s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
