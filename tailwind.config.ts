import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nis: {
          blue: {
            DEFAULT: "#0111A2",
            50: "#EEF2FF",
            100: "#E0E7FF",
            200: "#C7D2FE",
            500: "#0111A2",
            600: "#000E88",
            700: "#000B6E",
          },
          orange: {
            DEFAULT: "#F85508",
            50: "#FFF5ED",
            100: "#FFE6D5",
            500: "#F85508",
            600: "#DE4700",
            700: "#B83A00",
          },
          navy: {
            DEFAULT: "#00194F",
            950: "#000F30",
            900: "#00194F",
            850: "#002066",
            800: "#062C7F",
          },
          black: "#000000",
          white: "#FFFFFF",
          surface: "#F5F7FA",
          muted: "#6B7280",
          border: "#E5E7EB",
          "border-dark": "rgba(255, 255, 255, 0.12)",
        },
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "radial-gradient(rgba(1, 17, 162, 0.08) 1px, transparent 1px)",
        "grid-pattern-dark": "radial-gradient(rgba(248, 85, 8, 0.12) 1px, transparent 1px)",
      },
      boxShadow: {
        "subtle": "0 2px 8px -2px rgba(0, 25, 79, 0.06), 0 1px 4px -1px rgba(0, 25, 79, 0.04)",
        "elevated": "0 12px 32px -4px rgba(0, 25, 79, 0.12), 0 4px 12px -2px rgba(0, 25, 79, 0.08)",
        "glow-blue": "0 0 40px -8px rgba(1, 17, 162, 0.35)",
        "glow-orange": "0 0 35px -8px rgba(248, 85, 8, 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
