import React from "react";
import "../src/styles/App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans min-h-screen">
      <Home />

      <footer className="text-xs text-center text-gray-500 dark:text-gray-400 py-6">
        Proyecto desarrollado por{" "}
        <a
          href="https://github.com/NestorFron"
          className="underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          Nestor Frones
        </a>
      </footer>
    </div>
  );
}

export default App;
