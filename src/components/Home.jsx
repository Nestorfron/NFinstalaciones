import React from "react";
import ProductGrid from "../components/ProductGrid";
import img from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";
import {
  cameraProducts,
  alarmProducts,
  maintenanceServices,
} from "../data/products";

function Home() {
  return (
    <>
      {/* Header */}
      <header className="relative text-light-text dark:text-dark-text text-center min-h-[300px] md:min-h-[400px] overflow-hidden flex items-center justify-center py-8 md:py-12 px-4 bg-light-bg dark:bg-dark-bg">
        {/* Imagen de fondo desenfocada */}
        <img
          src={fondo}
          alt="fondo desenfocado"
          className="absolute inset-0 w-full h-full object-cover blur-[2px] md:blur-sm scale-110 z-0"
        />

        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Contenido */}
        <div className="relative z-10 max-w-screen-md">
          <img
            src={img}
            alt="logo"
            className="mx-auto mb-3 max-w-[100px] md:max-w-[140px]"
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-accent dark:text-accent">
            NF Instalaciones
          </h1>
          <p className="text-sm md:text-base text-white dark:text-white">
            Sistemas de videovigilancia, alarmas y mantenimiento
          </p>
          <button className="mt-4 bg-white text-accent dark:bg-dark-card dark:text-accent font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition">
            Cotizar Sistema
          </button>
        </div>
      </header>

      {/* Sección: Cámaras */}
      <section className="bg-light-bg dark:bg-dark-bg px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xl md:text-2xl text-center font-bold text-accent dark:text-accent mb-8">
            Videovigilancia
          </h2>
          <ProductGrid products={cameraProducts} />
          <div className="text-center mt-6">
            <button className="bg-white text-accent dark:bg-dark-card dark:text-accent font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition">
              Más información
            </button>
          </div>
        </div>
      </section>

      {/* Sección: Alarmas */}
      <section className="bg-light-card dark:bg-dark-card px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xl md:text-2xl text-center font-bold text-accent dark:text-accent mb-8">
            Alarmas
          </h2>
          <ProductGrid products={alarmProducts} />
          <div className="text-center mt-6">
            <button className="bg-white text-accent dark:bg-dark-bg dark:text-accent font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition">
              Más información
            </button>
          </div>
        </div>
      </section>

      {/* Sección: Servicio */}
      <section className="bg-light-bg dark:bg-dark-bg px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xl md:text-2xl text-center font-bold text-accent dark:text-accent mb-8">
            Servicio y Mantenimiento
          </h2>
          <ProductGrid products={maintenanceServices} />
          <div className="text-center mt-6">
            <button className="bg-white text-accent dark:bg-dark-card dark:text-accent font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition">
              Más información
            </button>
          </div>
        </div>
      </section>

      {/* Sección: Beneficios */}
      <section className="bg-light-card dark:bg-dark-card px-4 py-12">
        <div className="max-w-screen-lg mx-auto">
          <h3 className="text-lg md:text-xl font-semibold text-center text-accent dark:text-accent mb-6">
            ¿Por qué elegirnos?
          </h3>
          <ul className="space-y-4 text-sm md:text-base text-text dark:text-text max-w-md mx-auto list-disc list-inside">
            <li>Centro de monitoreo 24/7 y personal certificado.</li>
            <li>Más de 20 años de experiencia en seguridad integral.</li>
            <li>Asesoramiento técnico personalizado para tu proyecto.</li>
          </ul>
        </div>
      </section>

      {/* Sección: Contacto (sin botón) */}
      <section className="bg-light-bg dark:bg-dark-bg px-4 py-12">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center text-accent dark:text-accent mb-8">
            Contacto
          </h2>
          <form className="space-y-6">
            <select
              className="w-full p-3 rounded border border-accent bg-white dark:bg-dark-card text-text dark:text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Tipo de consulta
              </option>
              <option value="camaras">Cámaras</option>
              <option value="alarmas">Alarmas</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="otro">Otro</option>
            </select>

            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-3 rounded border border-accent bg-white dark:bg-dark-card text-text dark:text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              required
            />

            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full p-3 rounded border border-accent bg-white dark:bg-dark-card text-text dark:text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded border border-accent bg-white dark:bg-dark-card text-text dark:text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              required
            />

            <textarea
              rows="4"
              placeholder="Escribinos..."
              className="w-full p-3 rounded border border-accent bg-white dark:bg-dark-card text-text dark:text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-accent dark:bg-dark-card dark:text-accent font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition w-full md:w-auto"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
