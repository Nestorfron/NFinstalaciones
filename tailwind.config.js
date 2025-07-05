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
        light: {
          bg: "#f0f4f8",
          card: "#ffffff",
          text: "#374151",
          accent: "#2563eb",
          secondary: "#6b7280",
          highlight: "#9ca3af",
        },
        dark: {
          bg: "#0f172a",          // azul muy oscuro, casi navy
          card: "#1e293b",        // azul gris oscuro para tarjetas
          text: "#cbd5e1",        // azul gris claro para texto
          accent: "#60a5fa",      // azul suave y menos saturado para acentos
          secondary: "#94a3b8",   // azul grisáceo suave
          highlight: "#a3bffa",   // azul pastel claro para highlights
        },
      },
      boxShadow: {
        glass: "0 8px 24px rgba(0,0,0,0.15)",
      },
    },
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
