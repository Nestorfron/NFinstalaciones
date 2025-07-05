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
          bg: "#f9fafb",           // gris claro, fondo general
          card: "#ffffff",         // blanco puro
          text: "#1f2937",         // gris muy oscuro (tailwind slate-800)
          accent: "#1e3a8a",       // azul petróleo profundo
          secondary: "#64748b",    // gris azulado (slate-500)
          highlight: "#4b5563",    // gris medio (slate-600)
        },
        dark: {
          bg: "#111827",           // gris oscuro (slate-900)
          card: "#1f2937",         // gris más claro (slate-800)
          text: "#f3f4f6",         // gris muy claro (slate-100)
          accent: "#2563eb",       // azul sobrio (blue-600)
          secondary: "#94a3b8",    // gris azulado claro (slate-400)
          highlight: "#6b7280",    // gris medio
        },
      },
      boxShadow: {
        glass: "0 8px 24px rgba(0,0,0,0.2)",
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
