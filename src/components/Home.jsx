import React from "react";
import ProductGrid from "../components/ProductGrid";
import img from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";
import {
  cameraProducts,
  alarmProducts,
  maintenanceServices,
} from "../data/products";
import {
  FaBoxOpen,
  FaShieldAlt,
  FaHourglassHalf,
  FaUserGraduate,
  FaHandsHelping,
  FaCog,
  FaHeadset,
} from "react-icons/fa";

function Home() {
  return (
    <>
      {/* Header */}
      <header className="relative text-light-text dark:text-dark-text text-center min-h-[300px] md:min-h-[400px] overflow-hidden flex items-center justify-center py-8 md:py-12 px-4 bg-light-bg dark:bg-dark-bg">
        {/* Fondo fijo usando div con background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed blur-[2px] md:blur-sm scale-110 z-0"
          style={{ backgroundImage: `url(${fondo})` }}
          aria-hidden="true"
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
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-accent dark:text-accent drop-shadow-md">
            NF Instalaciones
          </h1>
          <p className="text-sm md:text-base text-white dark:text-white">
            Sistemas de videovigilancia, alarmas y mantenimiento
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 bg-white text-accent dark:bg-dark-card dark:text-accent font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition text-center"
          >
            Cotizar Sistema
          </a>
        </div>
      </header>

      {/* Sección: Cámaras */}
      <section className="bg-light-bg dark:bg-dark-bg px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xl md:text-2xl text-center font-bold text-accent dark:text-accent mb-8 drop-shadow-md">
            Videovigilancia
          </h2>
          <ProductGrid products={cameraProducts} />
          <div className="text-center mt-6">
            <a
              href="#contact"
              className="inline-block bg-white text-accent dark:bg-dark-card dark:text-accent font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition text-center"
            >
              Más información
            </a>
          </div>
        </div>
      </section>

      {/* Sección: Alarmas */}
      <section className="bg-light-card dark:bg-dark-card px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xl md:text-2xl text-center font-bold text-accent dark:text-accent mb-8 drop-shadow-md">
            Alarmas
          </h2>
          <ProductGrid products={alarmProducts} />
          <div className="text-center mt-6">
            <a
              href="#contact"
              className="inline-block bg-white text-accent dark:bg-dark-bg dark:text-accent font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition text-center"
            >
              Más información
            </a>
          </div>
        </div>
      </section>

      {/* Sección: Servicio */}
      <section className="bg-light-bg dark:bg-dark-bg px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xl md:text-2xl text-center font-bold text-accent dark:text-accent mb-8 drop-shadow-md">
            Servicio y Mantenimiento
          </h2>
          <ProductGrid products={maintenanceServices} />
          <div className="text-center mt-6">
            <a
              href="#contact"
              className="inline-block bg-white text-accent dark:bg-dark-card dark:text-accent font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition text-center"
            >
              Más información
            </a>
          </div>
        </div>
      </section>

      {/* Sección: Beneficios */}
      <section className="bg-light-card dark:bg-dark-card px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-screen-lg mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-accent dark:text-accent mb-10 drop-shadow-md">
            ¿Por qué elegir NF Instalaciones?
          </h3>
          <ul className="space-y-6 text-sm sm:text-base md:text-lg text-text dark:text-text max-w-md sm:max-w-lg md:max-w-xl mx-auto list-none">
            {[
              {
                icon: FaBoxOpen,
                text: "Instalamos productos nuevos, directo de importador, con certificado oficial de la marca Hikvision.",
              },
              {
                icon: FaShieldAlt,
                text: "Garantía de 1 año en todos nuestros sistemas y equipos.",
              },
              {
                icon: FaHourglassHalf,
                text: "Más de 10 años de experiencia en el rubro de seguridad y videovigilancia.",
              },
              {
                icon: FaUserGraduate,
                text: "Instaladores certificados y altamente capacitados, comprometidos con la calidad.",
              },
              {
                icon: FaHandsHelping,
                text: "Asesoramiento técnico personalizado para diseñar el sistema ideal para tu proyecto.",
              },
              {
                icon: FaCog,
                text: "Uso de tecnología avanzada para ofrecer soluciones seguras y confiables.",
              },
              {
                icon: FaHeadset,
                text: "Soporte post-instalación dedicado para resolver cualquier consulta o mantenimiento.",
              },
            ].map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-start gap-4">
                <Icon className="text-accent mt-1 flex-shrink-0" size={24} />
                <p className="leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sección: Contacto */}
      <section
        id="contact"
        className="bg-light-bg dark:bg-dark-bg px-4 py-12"
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center text-accent dark:text-accent mb-8 drop-shadow-md">
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
