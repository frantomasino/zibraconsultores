export const translations = {
  en: {
    nav: {
      inicio: "Home",
      servicios: "Services",
      nosotros: "About Us",
      clientes: "Clients",
      contactenos: "Contact Us",
    },
    hero: {
      title: "WE ARE A COMPREHENSIVE BUSINESS MANAGEMENT CONSULTING FIRM",
      subtitle: "We provide intelligent solutions for successful companies",
      bookSession: "Book Your Session Now",
      learnMore: "Learn More",
      studentsLabel: "Students Trained",
      ratingLabel: "Average Rating",
      experienceLabel: "Years Experience",
    },
    benefits: {
      title: "What we can do for your company",
      subtitle: "Services",
      benefit1Title: "Finding a solution doesn't mean a large investment",
      benefit1Desc:
        "Having a smaller infrastructure allows us to offer you more competitive costs without lowering efficiency and quality.",
      benefit2Title: "Direct communication",
      benefit2Desc:
        "We maintain direct contact with your company from the beginning to the end of the project/service without intermediaries that interfere with the clarity of what we do.",
      benefit3Title: "Adaptable services",
      benefit3Desc:
        "Our experience allows us to provide solutions that adapt to your requirements and your company's needs.",
    },
    services: {
      service1: "Accounting, auditing and internal control",
      service2: "M&A",
      service3: "Information systems and processes",
      seeMore: "See more",
    },
    about: {
      title: "About the Trainer",
      subtitle: "Expert Consulting",
    },
    booking: {
      title: "Book Your Training Session",
      subtitle: "Choose the Package That Works for You",
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Success Stories",
    },
    faq: {
      title: "Frequently Asked Questions",
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Contact us today",
      button: "Get Started",
    },
    footer: {
      tagline: "experience that supports your growth",
      rights: "All rights reserved.",
    },

    // 👉 CONTACT (AGREGADO)
    contact: {
      badge: "Contact",
      title: "Schedule Your Consultation",
      subtitle: "Let's discuss how we can help your business achieve its goals",

      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        message: "Message",
        submitEmail: "Send Email",
        submitWhatsApp: "WhatsApp",
      },

      info: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        address: "Address",
      },
    },
  },

  es: {
    nav: {
      inicio: "Inicio",
      servicios: "Servicios",
      nosotros: "Nosotros",
      clientes: "Clientes",
      contactenos: "Contáctenos",
    },
    hero: {
      title: "SOMOS UNA CONSULTORÍA DE GESTIÓN EMPRESARIAL INTEGRAL",
      subtitle: "Aportamos soluciones inteligentes para empresas exitosas",
      bookSession: "Reservar Sesión",
      learnMore: "Conoce Más",
      studentsLabel: "Estudiantes Formados",
      ratingLabel: "Calificación Promedio",
      experienceLabel: "Años de Experiencia",
    },
    benefits: {
      title: "Lo que podemos hacer por su empresa",
      subtitle: "Servicios",
      benefit1Title: "Encontrar una solución, no significa una gran inversión",
      benefit1Desc:
        "Tener una menor infraestructura nos permite ofrecerle costos más competitivos sin bajar la eficiencia y calidad.",
      benefit2Title: "Comunicación directa",
      benefit2Desc:
        "Mantenemos y contacto directo con su empresa desde el inicio hasta el final del proyecto/servicio sin intermediarios que intervengan en la claridad de lo que hacemos.",
      benefit3Title: "Servicios adaptables",
      benefit3Desc:
        "Nuestra experiencia nos permite brindarle soluciones que se adapten a sus requerimientos y necesidades de su empresa.",
    },
    services: {
      service1: "Contabilidad, auditoría y control interno",
      service2: "M&A",
      service3: "Procesos y sistemas de información",
      seeMore: "Ver más",
    },
    about: {
      title: "Sobre el Entrenador",
      subtitle: "Consultoría Experta",
    },
    booking: {
      title: "Reserva tu Sesión de Entrenamiento",
      subtitle: "Elige el Paquete que Funcione para Ti",
    },
    testimonials: {
      title: "Lo que Dicen Nuestros Clientes",
      subtitle: "Historias de Éxito",
    },
    faq: {
      title: "Preguntas Frecuentes",
    },
    cta: {
      title: "¿Listo para Transformar tu Negocio?",
      subtitle: "Contáctanos hoy",
      button: "Comenzar",
    },
    footer: {
      tagline: "experiencia que acompaña tu crecimiento",
      rights: "Todos los derechos reservados.",
    },

    // 👉 CONTACT (AGREGADO)
    contact: {
      badge: "Contacto",
      title: "Agenda tu Consulta",
      subtitle:
        "Conversemos cómo podemos ayudar a tu empresa a alcanzar sus objetivos",

      form: {
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        company: "Empresa",
        message: "Mensaje",
        submitEmail: "Enviar Email",
        submitWhatsApp: "WhatsApp",
      },

      info: {
        title: "Información de contacto",
        phone: "Teléfono",
        email: "Email",
        address: "Dirección",
      },
    },
  },
} as const

export type Language = keyof typeof translations
