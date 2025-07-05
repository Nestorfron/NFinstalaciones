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
          bg: "#f0f4f8",          // azul muy claro, casi blanco azulado
          card: "#ffffff",        // blanco puro para tarjetas
          text: "#374151",        // gris oscuro (slate-700)
          accent: "#2563eb",      // azul fuerte (blue-600)
          secondary: "#6b7280",   // gris medio (gray-500)
          highlight: "#9ca3af",   // gris claro (gray-400)
        },
        dark: {
          bg: "#1e293b",          // azul gris oscuro (slate-800)
          card: "#334155",        // azul gris más claro (slate-700)
          text: "#f9fafb",        // casi blanco para texto
          accent: "#3b82f6",      // azul brillante (blue-500)
          secondary: "#9ca3af",   // gris claro (gray-400)
          highlight: "#64748b",   // gris azulado medio (slate-500)
        },
      },
      
      boxShadow: {
        glass: "0 8px 24px rgba(0,0,0,0.15)", // sombra suave y fresca
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
