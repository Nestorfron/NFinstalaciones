/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#f9fafb",
        lightCard: "#ffffff",
        lightText: "#111827",
        lightAccent: "#111111",
        lightSecondary: "#6b7280",
        lightHighlight: "#d1d5db",
    
        darkBg: "#121212",
        darkCard: "#1e1e1e",
        darkText: "#f3f4f6",
        darkAccent: "#ffffff",
        darkSecondary: "#9ca3af",
        darkHighlight: "#4b5563",
      },
      boxShadow: {
        glass: "0 8px 24px rgba(0,0,0,0.15)",
      },
    }
    
  },
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "2px",
          medium: "4px",
          large: "6px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
      themes: {
        light: {},
        dark: {},
      },
    }),
  ],
};
