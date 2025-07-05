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
        // Light theme colores super vivos
        "light-bg": "#d0e6ff",        // azul pastel muy brillante
        "light-card": "#ffffff",      // blanco puro para contraste fuerte
        "light-text": "#1e40af",      // azul intenso oscuro para texto (blue-900)
        "light-accent": "#1e3a8a",    // azul fuerte, vibrante (blue-900)
        "light-secondary": "#2563eb", // azul vivo (blue-600)
        "light-highlight": "#3b82f6", // azul eléctrico para destacar (blue-500)

        // Dark theme colores más vibrantes
        "dark-bg": "#121f4a",         // azul oscuro profundo, más saturado
        "dark-card": "#1e2a78",       // azul medio oscuro, saturado
        "dark-text": "#e0e7ff",       // azul muy claro para texto, casi blanco
        "dark-accent": "#60a5fa",     // azul vibrante (blue-400)
        "dark-secondary": "#93c5fd",  // azul pastel luminoso
        "dark-highlight": "#bfdbfe",  // azul pastel claro, para highlights
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
