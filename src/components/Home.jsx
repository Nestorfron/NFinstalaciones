import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ProductGrid from "../components/ProductGrid";
import img from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";
import beneficiosBg from "../assets/fondo2.jpg";
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
import WhatsAppButton from "./WhatsAppButton";

function Home() {
  const form = useRef();

  // Parallax efecto para background header
  useEffect(() => {
    const bg = document.getElementById("parallax-bg");
    const onScroll = () => {
      const scrollPos = window.pageYOffset;
      if (bg) bg.style.transform = `translateY(${scrollPos * 0.3}px) scale(1.1)`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Para animar la visibilidad (fade-in) de los beneficios
  const [visibleItems, setVisibleItems] = React.useState({});

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleItems = {};
      document.querySelectorAll(".fade-in-trigger").forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          newVisibleItems[i] = true;
        }
      });
      setVisibleItems(newVisibleItems);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nr7vuyw",
        "template_aon0dho",
        form.current,
        "2fzYvOqMl7kCbqgf6"
      )
      .then(
        () => {
          alert("✅ Mensaje enviado correctamente.");
          e.target.reset();
        },
        (error) => {
          console.error("❌ Error al enviar:", error);
          alert("Ocurrió un error al enviar el mensaje.");
        }
      );
  };

  return (
    <>
      {/* Header */}
      <header
        className="relative text-light-text dark:text-dark-text text-center min-h-[300px] md:min-h-[400px] overflow-hidden flex items-center justify-center py-8 md:py-12 px-4 bg-light-bg dark:bg-dark-bg"
        style={{ perspective: "1000px" }}
      >
        <div
          id="parallax-bg"
          className="absolute inset-0 bg-cover bg-center blur-[2px] md:blur-sm scale-110 z-0 brightness-75 transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url(${fondo})` }}
          aria-hidden="true"
        />
        {/* Overlay negro más oscuro */}
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div id="home" className="relative z-10 max-w-screen-md">
          <img
            src={img}
            alt="logo"
            className="mx-auto mb-3 max-w-[100px] md:max-w-[140px]"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-white dark:text-white drop-shadow-lg">
            NF Instalaciones
          </h1>
          <p className="text-base md:text-lg text-white dark:text-white drop-shadow-md">
            Sistemas de videovigilancia, alarmas y mantenimiento
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 bg-white text-black dark:bg-dark-card dark:text-accent font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center text-lg"
          >
            Cotizar Sistema
          </a>
        </div>
      </header>

      {/* Sección de Productos */}
      <section className="bg-lightBg dark:bg-darkBg px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xl md:text-2xl text-center font-bold text-lightAccent dark:text-darkAccent mb-8 drop-shadow-md">
            Nuestros Productos y Servicios
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-6 w-fit">
              {[
                { title: "Videovigilancia", products: cameraProducts },
                { title: "Alarmas", products: alarmProducts },
                { title: "Mantenimiento", products: maintenanceServices },
              ].map(({ title, products }, i) => (
                <div
                  key={i}
                  className="bg-lightCard dark:bg-darkCard rounded-lg shadow-glass p-4 flex-shrink-0 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold text-lightAccent dark:text-darkAccent mb-4 text-center">
                    {title}
                  </h3>
                  <ProductGrid products={products} />
                  <div className="text-center mt-4">
                    <a
                      href="#contact"
                      className="inline-block bg-lightAccent text-white dark:bg-darkHighlight dark:text-darkCard font-semibold py-2 px-6 rounded-full shadow-md hover:brightness-110 hover:shadow-lg transition"
                    >
                      Más información
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="relative bg-lightCard dark:bg-darkCard px-6 py-12 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 blur-sm"
          style={{ backgroundImage: `url(${beneficiosBg})` }}
        />
        <div className="relative max-w-screen-lg mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-lightAccent dark:text-darkAccent mb-10 drop-shadow-md">
            ¿Por qué elegir NF Instalaciones?
          </h3>
          <ul className="space-y-6 text-sm sm:text-base md:text-lg text-lightText dark:text-darkText max-w-md sm:max-w-lg md:max-w-xl mx-auto list-none">
            {[
              FaBoxOpen,
              FaShieldAlt,
              FaHourglassHalf,
              FaUserGraduate,
              FaHandsHelping,
              FaCog,
              FaHeadset,
            ].map((Icon, i) => (
              <li
                key={i}
                className={`flex items-start gap-4 fade-in-trigger transition-opacity duration-700 ease-out ${
                  visibleItems[i] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <Icon
                  className="text-lightAccent dark:text-darkAccent mt-1 flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
                  size={24}
                />
                <p className="leading-relaxed">
                  {
                    [
                      "Instalamos productos nuevos, directo de importador, con certificado oficial de la marca Hikvision.",
                      "Garantía de 1 año en todos nuestros sistemas y equipos.",
                      "Más de 10 años de experiencia en el rubro de seguridad y videovigilancia.",
                      "Instaladores certificados y altamente capacitados, comprometidos con la calidad.",
                      "Asesoramiento técnico personalizado para diseñar el sistema ideal para tu proyecto.",
                      "Uso de tecnología avanzada para ofrecer soluciones seguras y confiables.",
                      "Soporte post-instalación dedicado para resolver cualquier consulta o mantenimiento.",
                    ][i]
                  }
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="bg-lightBg dark:bg-darkBg px-4 py-12">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center text-lightAccent dark:text-darkAccent mb-8 drop-shadow-md">
            Contacto
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <select
              name="tipo"
              className="w-full p-3 rounded border border-lightAccent bg-white dark:bg-darkCard text-lightText dark:text-darkText focus:outline-none focus:ring-2 focus:ring-lightAccent focus:border-transparent transition"
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

            {[
              { name: "nombre", type: "text", placeholder: "Nombre" },
              { name: "telefono", type: "tel", placeholder: "Teléfono" },
              { name: "email", type: "email", placeholder: "Email" },
            ].map(({ name, type, placeholder }) => (
              <input
                key={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className="w-full p-3 rounded border border-lightAccent bg-white dark:bg-darkCard text-lightText dark:text-darkText focus:outline-none focus:ring-2 focus:ring-lightAccent focus:border-transparent transition"
                required
              />
            ))}

            <textarea
              name="mensaje"
              rows="4"
              placeholder="Escribinos..."
              className="w-full p-3 rounded border border-lightAccent bg-white dark:bg-darkCard text-lightText dark:text-darkText focus:outline-none focus:ring-2 focus:ring-lightAccent focus:border-transparent transition resize-none"
              required
            />

            <button
              type="submit"
              className="bg-lightAccent text-white dark:bg-darkHighlight dark:text-darkCard font-semibold py-2 px-6 rounded-full shadow-md hover:brightness-110 hover:shadow-lg transition w-full md:w-auto"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp flotante con pulso */}
      <WhatsAppButton
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg animate-pulse hover:scale-110 transition-transform"
      />
    </>
  );
}

export default Home;
