import React from "react";
import ProductCard from "./ProductCard";
import img from "../assets/logo.png";

import { cameraProducts, alarmProducts, maintenanceServices } from "../data/products";

function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-light-accent to-light-secondary dark:from-dark-accent dark:to-dark-secondary text-white py-5 px-4 text-center shadow-lg">
        <img src={img} alt="logo" className="m-auto mb-2 max-w-[150px]" />
        <h1 className="text-3xl md:text-5xl font-bold mb-2">NF Instalaciones</h1>
        <p className="text-base md:text-lg">
          Sistemas de videovigilancia y de alarma - Mantenimiento
        </p>
      </header>

      {/* Cámaras de Seguridad */}
      <section className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-light-accent dark:text-dark-accent mb-10">
            Cámaras de Seguridad
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cameraProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sistemas de Alarmas */}
      <section className="bg-light-alt dark:bg-dark-alt text-light-text dark:text-dark-text px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-light-accent dark:text-dark-accent mb-10">
            Sistemas de Alarmas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alarmProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicio y Mantenimiento */}
      <section className="bg-light-green dark:bg-dark-green text-light-text dark:text-dark-text px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-light-accent dark:text-dark-accent mb-10">
            Servicio y Mantenimiento
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenanceServices.map((service, idx) => (
              <ProductCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-light-highlight dark:bg-dark-highlight py-12 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center  mb-10">
            Contacto
          </h2>
          <form className="space-y-4">
            <select
              className="w-full p-3 rounded border border-light-accent dark:border-dark-accent bg-white dark:bg-dark-card text-light-text dark:text-dark-text"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecciona el tipo de consulta
              </option>
              <option value="camaras">Cámaras de Seguridad</option>
              <option value="alarmas">Sistemas de Alarmas</option>
              <option value="mantenimiento">Servicio y Mantenimiento</option>
              <option value="otro">Otra consulta</option>
            </select>

            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-3 rounded border border-light-accent dark:border-dark-accent bg-white dark:bg-dark-card text-light-text dark:text-dark-text"
              required
            />
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full p-3 rounded border border-light-accent dark:border-dark-accent bg-white dark:bg-dark-card text-light-text dark:text-dark-text"
              required
            />
            <textarea
              placeholder="Tu mensaje"
              rows="4"
              className="w-full p-3 rounded border border-light-accent dark:border-dark-accent bg-white dark:bg-dark-card text-light-text dark:text-dark-text"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-light-accent dark:bg-dark-accent hover:opacity-90 text-white font-semibold py-2 px-6 rounded transition duration-300 w-full md:w-auto"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
