// src/data/products.js
import { MdStorage, MdOutlineWifi, MdWifiTethering, MdSettingsInputComponent, MdDialpad, MdPhoneAndroid, MdBuildCircle } from "react-icons/md";
import { HiServerStack } from "react-icons/hi2";
import { FiVideo } from "react-icons/fi";
import { BsBatteryCharging } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { TbDoor } from "react-icons/tb";
import { FaBullhorn, FaTools } from "react-icons/fa";
import { MdSensors } from "react-icons/md";



export const cameraProducts = [
    {
      name: "DVR",
      description: "Grabadores digitales para sistemas de cámaras análogicas.",
      
      icon: <MdStorage size={32} />,
    },
    {
      name: "NVR",
      description: "Grabadores en red para cámaras IP modernas.",
      
      icon: <HiServerStack size={32} />,
    },
    {
      name: "Cámaras Análogicas",
      description: "Cámaras económicas para instalaciones tradicionales.",
      
      icon: <FiVideo size={32} />,
    },
    {
      name: "Cámaras IP",
      description: "Conectadas a red, alta resolución y control remoto.",
      
      icon: <MdOutlineWifi size={32} />,
    },
    {
      name: "Cámaras WiFi",
      description: "Instalación simple, ideales para hogares o PyMEs.",
      
      icon: <MdWifiTethering size={32} />,
    },
    {
      name: "Cámaras Autónomas",
      description: "Funcionan sin cableado ni red: solares o con batería.",
      
      icon: <BsBatteryCharging size={32} />,
    },
  ];

  export const alarmProducts = [
    {
      name: "Panel de Control",
      description: "El corazón del sistema que conecta todos los sensores.",
      
      icon: <MdSettingsInputComponent size={32} />,
    },
    {
      name: "Sensores de Movimiento",
      description: "Detectan movimiento para proteger interiores.",
      
      icon: <MdSensors size={32} />,
    },
    {
      name: "Sensores de Puertas/Ventanas",
      description: "Alertan ante aperturas no autorizadas.",
      
      icon: <TbDoor size={32} />,
    },
    {
      name: "Sirenas Internas y Externas",
      description: "Emiten alertas sonoras para disuadir intrusos.",
      
      icon: <FaBullhorn size={32} />,
    },
    {
      name: "Teclados Inalámbricos",
      description: "Permiten armar y desarmar fácilmente el sistema.",
      
      icon: <MdDialpad size={32} />,
    },
    {
      name: "Alarmas Conectadas a Celular",
      description: "Notificaciones directas a tu móvil en tiempo real.",
      
      icon: <MdPhoneAndroid size={32} />,
    },
  ];

  export const maintenanceServices = [
    {
      name: "Instalación Profesional",
      description: "Montaje y configuración realizados por técnicos certificados.",
      
      icon: <GiElectric size={32} />,
    },
    {
      name: "Mantenimiento Preventivo",
      description: "Revisiones periódicas para asegurar el buen funcionamiento.",
      
      icon: <MdBuildCircle size={32} />,
    },
    {
      name: "Asistencia Técnica Rápida",
      description: "Soporte ágil ante fallas o inconvenientes técnicos.",
      
      icon: <FaTools size={32} />,
    },
  ];
  

  


  