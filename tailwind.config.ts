import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0C",
        surface: "#121212",
        accent: "#C6A15B",
        primary: "#F5F5F5",
        secondary: "#A8A8A8",
        marble: "#E8E6E3"
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    }
  },
  plugins: []
} satisfies Config;
