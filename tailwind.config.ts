import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f7f4e8",
        ink: "#121212",
        brand: {
          DEFAULT: "#ffd000",
          dark: "#d4aa00",
          ink: "#121212"
        },
        muted: "#505050"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        card: "0 24px 70px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
