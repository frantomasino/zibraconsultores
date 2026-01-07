"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.clients": "Clients",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.testimonials": "Testimonials",
    "cta.contact": "Contact Us",

    // Hero
    "hero.badge": "Business Consulting",
    "hero.title": "Strategic Consulting for Business Growth",
    "hero.subtitle":
      "We help companies transform their operations and achieve sustainable growth through expert strategic guidance and proven methodologies.",
    "hero.cta.primary": "Contact Us",
    "hero.cta.secondary": "Learn More",
    "hero.trust1": "Free Consultation",
    "hero.trust2": "Guaranteed Results",
    "hero.trust3": "Certified Experts",
    "hero.card.badge": "Trust",
    "hero.card.text": "98% client satisfaction",
    "hero.stat1": "15+",
    "hero.stat1.label": "Years Experience",
    "hero.stat2": "200+",
    "hero.stat2.label": "Clients Served",
    "hero.stat3": "98%",
    "hero.stat3.label": "Success Rate",

    // Success Stories
    "successStories.badge": "Proven Results",
    "successStories.title": "Success Cases",
    "successStories.subtitle": "Real results that demonstrate our commitment to business excellence",
    "successStories.story1.metric": "+150%",
    "successStories.story1.title": "Revenue Growth",
    "successStories.story1.desc":
      "Helped a retail company triple their revenue through strategic planning and market expansion",
    "successStories.story2.metric": "500+",
    "successStories.story2.title": "Teams Trained",
    "successStories.story2.desc": "Developed and trained high-performance teams across multiple industries",
    "successStories.story3.metric": "40%",
    "successStories.story3.title": "Cost Reduction",
    "successStories.story3.desc": "Optimized operations reducing operational costs by 40% while maintaining quality",
    "successStories.story4.metric": "95%",
    "successStories.story4.title": "Goal Achievement",
    "successStories.story4.desc": "95% of our clients achieve or exceed their established business goals",

    // Services
    "services.badge": "Our Services",
    "services.mainTitle": "What we can do",
    "services.mainTitleHighlight": "for your business",
    "services.title": "Services",
    "services.subtitle": "Tailored consulting services designed to meet your unique business needs",
    "services.viewAll": "View All Services",
    "services.strategy.title": "Strategic Planning",
    "services.strategy.desc": "Develop clear roadmaps and actionable strategies for long-term success",
    "services.operations.title": "Operations Optimization",
    "services.operations.desc": "Streamline processes and improve efficiency across your organization",
    "services.financial.title": "Financial Consulting",
    "services.financial.desc": "Expert financial analysis and planning to maximize profitability",
    "services.hr.title": "Human Resources",
    "services.hr.desc": "Build strong teams with effective HR strategies and talent management",
    "services.tech.title": "Technology Integration",
    "services.tech.desc": "Leverage technology to automate and scale your business operations",
    "services.growth.title": "Growth Strategy",
    "services.growth.desc": "Identify opportunities and develop plans for market expansion",

    // Services (extra keys for ServicesPreview)
    "services.highlight": "What you can expect",

    "services.strategy.point1": "Initial diagnosis and clear definition of achievable objectives.",
    "services.strategy.point2": "Practical action plan aligned with your company’s operational reality.",
    "services.strategy.point3": "KPI tracking and continuous adjustments to ensure results.",
    "services.strategy.highlight":
      "We work closely with your team and focus on measurable outcomes, turning strategy into real execution.",

    "services.operations.point1": "Process mapping and identification of bottlenecks and inefficiencies.",
    "services.operations.point2": "Standardization and improvement of workflows to reduce friction.",
    "services.operations.point3": "Operational KPIs and routines to sustain performance over time.",
    "services.operations.highlight":
      "We improve daily operations with a practical approach: simpler processes, better control, and visible impact.",

    "services.financial.point1": "Financial diagnosis: cash flow, costs, margins, and key risks.",
    "services.financial.point2": "Budgeting and forecasting to support decision-making.",
    "services.financial.point3": "Reporting and indicators to monitor profitability and performance.",
    "services.financial.highlight":
      "We bring clarity to numbers so you can decide with confidence and improve profitability sustainably.",

    "services.people.title": "People Management",
    "services.people.desc": "Build stronger teams with clear roles, leadership and effective practices.",
    "services.people.point1": "Role definition, responsibilities and organizational structure.",
    "services.people.point2": "Leadership routines, feedback and performance management practices.",
    "services.people.point3": "Culture, alignment and tools to improve teamwork and accountability.",
    "services.people.highlight":
      "We help you align people and processes, so the team moves in the same direction and execution improves.",

    // About
    "about.badge": "About Zibra Consulting",
    "about.title": "Your Partner in Business Excellence",
    "about.intro":
      "We are a team of leaders with robust business experience in the logistics industry, specialized in the development, implementation and optimization of projects to achieve growth and efficiency in the operations of our clients.",
    "about.p1":
      "With over 15 years of experience in business consulting, we've helped hundreds of companies transform their operations and achieve sustainable growth.",
    "about.p2":
      "Our expertise spans across strategic planning, operations management, financial consulting, and organizational development. We work with businesses of all sizes, from startups to established enterprises.",
    "about.cert1.title": "Certified Business Consultants",
    "about.cert1.desc": "Recognized by international consulting bodies",
    "about.cert2.title": "200+ Successful Projects",
    "about.cert2.desc": "With 98% client satisfaction rate",
    "about.cert3.title": "Personalized Approach",
    "about.cert3.desc": "Custom solutions for your unique challenges",
    "about.team.member1.name": "Juan Pablo Finocchiaro",
    "about.team.member1.title": "Finance and Technology Expert",
    "about.team.member1.expertise":
      "Specialist in administrative-financial processes\nExecutive with solid trajectory as CFO and CTO at International Holdings\nAssociate director in more than 10 companies in LATAM\nLeader in digital transformation processes and operational efficiency and strategic decision-making in dynamic environments",
    "about.team.member2.name": "Lucas Hachen",
    "about.team.member2.title": "Management and Finance Expert",
    "about.team.member2.expertise":
      "Executive with extensive experience in general and financial management of national and multinational companies\nSpecialist in restructuring, mergers and acquisitions (M&A) and development of corporate strategies to boost growth and operational efficiency",
    "about.team.member3.name": "Santiago Saenz",
    "about.team.member3.title": "Risk Management and Compliance Expert",
    "about.team.member3.expertise":
      "Executive with extensive experience in private organizations\nCFO Holding in Uruguay and Paraguay\nExternal advisor and consultant with more than 25 years of experience",

    // Testimonials
    "testimonials.badge": "Success Stories",
    "testimonials.title": "What Our Clients Say",
    "testimonial1.name": "Carlos Mendoza",
    "testimonial1.role": "CEO, Tech Innovations",
    "testimonial1.quote":
      "Gelso Consulting transformed our operations. Their strategic insights helped us increase efficiency by 40% in just 6 months.",
    "testimonial2.name": "Maria Rodriguez",
    "testimonial2.role": "Founder, Retail Solutions",
    "testimonial2.quote":
      "The team's expertise in financial planning helped us identify key opportunities and double our revenue within a year.",
    "testimonial3.name": "Juan Pérez",
    "testimonial3.role": "Operations Director",
    "testimonial3.quote":
      "Professional, knowledgeable, and results-driven. They understood our challenges and delivered practical solutions.",

    // Contact
    "contact.badge": "Get Started",
    "contact.title": "Schedule Your Consultation",
    "contact.subtitle": "Let's discuss how we can help your business achieve its goals",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.company": "Company Name",
    "contact.form.message": "Tell us about your business needs",
    "contact.form.submit": "Send Message",
    "contact.form.sendEmail": "Send Email",
    "contact.form.sendWhatsApp": "WhatsApp",
    "contact.email.subject": "Business Inquiry",
    "contact.email.name": "Name",
    "contact.email.email": "Email",
    "contact.email.phone": "Phone",
    "contact.email.company": "Company",
    "contact.email.message": "Message",
    "contact.whatsapp.title": "Business Inquiry from Website",
    "contact.info.title": "Contact Information",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.address": "Address",

    // Clients
    "clients.badge": "Our Clients",
    "clients.title": "Trusted by Leading Companies",
    "clients.subtitle": "We work with innovative companies across industries to drive growth and success",

    // FAQ
    "faq.badge": "Questions?",
    "faq.title": "Frequently Asked Questions",
    "faq1.q": "What industries do you work with?",
    "faq1.a":
      "We work with businesses across all industries including technology, retail, manufacturing, services, and more. Our solutions are customized to each sector's unique needs.",
    "faq2.q": "How long does a typical consulting engagement last?",
    "faq2.a":
      "Engagement length varies based on project scope. Short-term projects may last 3-6 months, while comprehensive transformations can extend to 12+ months.",
    "faq3.q": "What is your approach to consulting?",
    "faq3.a":
      "We take a collaborative, data-driven approach. We work closely with your team to understand challenges, analyze data, and implement practical solutions that deliver measurable results.",
    "faq4.q": "Do you offer ongoing support?",
    "faq4.a":
      "Yes! We provide ongoing support and advisory services to ensure long-term success and help you adapt to changing business conditions.",
    "faq5.q": "How do you measure success?",
    "faq5.a":
      "We establish clear KPIs at the start of each engagement and track progress regularly. Success is measured by tangible improvements in efficiency, revenue, or other agreed-upon metrics.",
    "faq6.q": "What are your fees?",
    "faq6.a":
      "Our fees vary based on project scope and complexity. We offer flexible pricing models including project-based, retainer, and hourly rates. Contact us for a custom quote.",

    // CTA
    "cta.title": "Ready to Transform Your Business?",
    "cta.subtitle":
      "Join hundreds of successful companies who have achieved their goals with our expert guidance. Your success story starts here.",
    "cta.button.primary": "Schedule Consultation",
    "cta.button.secondary": "Learn More",
    "cta.note": "Free initial consultation • Customized solutions • Proven results",

    // Footer
    "footer.tagline": "Strategic business consulting for sustainable growth",
    "footer.links": "Quick Links",
    "footer.support": "Support",
    "footer.connect": "Connect",
    "footer.copyright": "2025 Zibra Consulting. All rights reserved.",
    "footer.certified": "Certified consulting team",
    "footer.contact": "Contact",
  },

  // ARRANCA IDIOMA ESPAÑOL
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.clients": "Clientes",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.testimonials": "Testimonios",
    "cta.contact": "Contáctanos",

    // Hero
    "hero.badge": "Consultoría Empresarial",
    "hero.title": "Consultoría Estratégica para el Crecimiento Empresarial",
    "hero.subtitle":
      "Ayudamos a las empresas a transformar sus operaciones y lograr un crecimiento sostenible a través de orientación estratégica experta y metodologías comprobadas.",
    "hero.cta.primary": "Contáctanos",
    "hero.cta.secondary": "Saber Más",
    "hero.trust1": "Consulta Gratis",
    "hero.trust2": "Resultados Garantizados",
    "hero.trust3": "Expertos Certificados",
    "hero.card.badge": "Confianza",
    "hero.card.text": "98% de satisfacción del cliente",
    "hero.stat1": "15+",
    "hero.stat1.label": "Años de Experiencia",
    "hero.stat2": "200+",
    "hero.stat2.label": "Clientes Atendidos",
    "hero.stat3": "98%",
    "hero.stat3.label": "Tasa de Éxito",

    // Success Stories
    "successStories.badge": "Resultados Comprobados",
    "successStories.title": "Casos de Éxito",
    "successStories.subtitle": "Resultados reales que demuestran nuestro compromiso con la excelencia empresarial",
    "successStories.story1.metric": "+150%",
    "successStories.story1.title": "Crecimiento en Ingresos",
    "successStories.story1.desc":
      "Ayudamos a una empresa retail a triplicar sus ingresos mediante planificación estratégica y expansión de mercado",
    "successStories.story2.metric": "500+",
    "successStories.story2.title": "Equipos Capacitados",
    "successStories.story2.desc": "Desarrollamos y capacitamos equipos de alto rendimiento en múltiples industrias",
    "successStories.story3.metric": "40%",
    "successStories.story3.title": "Reducción de Costos",
    "successStories.story3.desc": "Optimizamos operaciones reduciendo costos operativos en 40% manteniendo la calidad",
    "successStories.story4.metric": "95%",
    "successStories.story4.title": "Logro de Objetivos",
    "successStories.story4.desc":
      "El 95% de nuestros clientes alcanzan o superan sus objetivos empresariales establecidos",

    // Services
    "services.badge": "Nuestros Servicios",
    "services.mainTitle": "Lo que podemos hacer",
    "services.mainTitleHighlight": "por su empresa",
    "services.title": "Servicios",
    "services.subtitle":
      "Servicios de consultoría personalizados diseñados para satisfacer tus necesidades empresariales únicas",
    "services.viewAll": "Ver Todos los Servicios",
    "services.strategy.title": "Planificación Estratégica",
    "services.strategy.desc": "Desarrolla hojas de ruta claras y estrategias accionables para el éxito a largo plazo",
    "services.operations.title": "Optimización de Operaciones",
    "services.operations.desc": "Agiliza procesos y mejora la eficiencia en toda tu organización",
    "services.financial.title": "Consultoría Financiera",
    "services.financial.desc": "Análisis financiero experto y planificación para maximizar la rentabilidad",
    "services.hr.title": "Recursos Humanos",
    "services.hr.desc": "Construye equipos sólidos con estrategias efectivas de RR.HH. y gestión del talento",
    "services.tech.title": "Integración Tecnológica",
    "services.tech.desc": "Aprovecha la tecnología para automatizar y escalar tus operaciones comerciales",
    "services.growth.title": "Estrategia de Crecimiento",
    "services.growth.desc": "Identifica oportunidades y desarrolla planes para la expansión del mercado",

    // Services (claves extra para ServicesPreview)
    "services.highlight": "Qué podés esperar",

    "services.strategy.point1": "Diagnóstico inicial y definición de objetivos claros y alcanzables.",
    "services.strategy.point2": "Plan de acción práctico, alineado con la realidad operativa de tu empresa.",
    "services.strategy.point3": "Seguimiento de indicadores y ajustes continuos para asegurar resultados.",
    "services.strategy.highlight":
      "Trabajamos cerca de tu equipo y con foco en resultados medibles, para convertir la estrategia en ejecución.",

    "services.operations.point1": "Mapeo de procesos e identificación de cuellos de botella e ineficiencias.",
    "services.operations.point2": "Estandarización y mejora de flujos para reducir fricción y errores.",
    "services.operations.point3": "KPIs y rutinas operativas para sostener el rendimiento en el tiempo.",
    "services.operations.highlight":
      "Mejoramos el día a día con un enfoque práctico: procesos más simples, mejor control e impacto visible.",

    "services.financial.point1": "Diagnóstico financiero: caja, costos, márgenes y riesgos clave.",
    "services.financial.point2": "Presupuesto y proyecciones para respaldar decisiones.",
    "services.financial.point3": "Reportes e indicadores para monitorear rentabilidad y performance.",
    "services.financial.highlight":
      "Ordenamos los números para que tomes decisiones con confianza y mejores la rentabilidad de forma sostenible.",

    "services.people.title": "Gestión de Personas",
    "services.people.desc": "Construí equipos más sólidos con roles claros, liderazgo y prácticas efectivas.",
    "services.people.point1": "Definición de roles, responsabilidades y estructura organizacional.",
    "services.people.point2": "Rutinas de liderazgo, feedback y gestión del desempeño.",
    "services.people.point3":
      "Cultura, alineación y herramientas para mejorar trabajo en equipo y responsabilidad.",
    "services.people.highlight":
      "Alineamos personas y procesos para que el equipo avance en la misma dirección y mejore la ejecución.",

    // About
    "about.badge": "Sobre Zibra Consultora",
    "about.title": "Tu Socio en la Excelencia Empresarial",
    "about.intro":
      "Somos un equipo de líderes con una robusta experiencia empresarial en la industria logística, especializados en el desarrollo, implementación y optimización de proyectos para lograr crecimiento y eficiencia en las operaciones de nuestros clientes.",
    "about.p1":
      "Con más de 15 años de experiencia en consultoría empresarial, hemos ayudado a cientos de empresas a transformar sus operaciones y lograr un crecimiento sostenible.",
    "about.p2":
      "Nuestra experiencia abarca planificación estratégica, gestión de operaciones, consultoría financiera y desarrollo organizacional. Trabajamos con empresas de todos los tamaños, desde startups hasta empresas establecidas.",
    "about.cert1.title": "Consultores Empresariales Certificados",
    "about.cert1.desc": "Reconocidos por organismos internacionales de consultoría",
    "about.cert2.title": "200+ Proyectos Exitosos",
    "about.cert2.desc": "Con 98% de satisfacción del cliente",
    "about.cert3.title": "Enfoque Personalizado",
    "about.cert3.desc": "Soluciones personalizadas para tus desafíos únicos",
    "about.team.member1.name": "Francisco Tomasino",
    "about.team.member1.title": "Experto en Finanzas y Tecnología",
    "about.team.member1.expertise":
      "Especialista en procesos administrativo-financieros\nEjecutivo con sólida trayectoria como CFO y CTO en Holdings Internacionales\nDirector asociado en mas de 10 empresas en LATAM\nLíder en procesos de transformación digital y eficiencia operativa y la toma de decisiones estratégicas en entornos dinámicos",
    "about.team.member2.name": "Francisco Tomasino",
    "about.team.member2.title": "Experto en Gestión y Finanza",
    "about.team.member2.expertise":
      "Ejecutivo con amplia experiencia en gestión general y financiera de empresas nacionales y multinacionales\nEspecialista en reestructuración, fusiones y adquisiciones (M&A) y desarrollo de estrategias corporativas para impulsar el crecimiento y la eficiencia operativa",
    "about.team.member3.name": "Francisco Tomasino",
    "about.team.member3.title": "Experto Gestión de Riesgo y Compliance",
    "about.team.member3.expertise":
      "Ejecutivo con amplia experiencia en organizaciones privadas\nCFO Holding en Uruguay y Paraguay\nAsesor y consultor externo con más de 25 años de experiencia",

    // Testimonials
    "testimonials.badge": "Historias de Éxito",
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonial1.name": "Carlos Mendoza",
    "testimonial1.role": "CEO, Tech Innovations",
    "testimonial1.quote":
      "Zibra Consultora transformó nuestras operaciones. Sus conocimientos estratégicos nos ayudaron a aumentar la eficiencia en un 40% en solo 6 meses.",
    "testimonial2.name": "Maria Rodriguez",
    "testimonial2.role": "Fundadora, Retail Solutions",
    "testimonial2.quote":
      "La experiencia del equipo en planificación financiera nos ayudó a identificar oportunidades clave y duplicar nuestros ingresos en un año.",
    "testimonial3.name": "Juan Pérez",
    "testimonial3.role": "Director de Operaciones",
    "testimonial3.quote":
      "Profesionales, conocedores y orientados a resultados. Entendieron nuestros desafíos y entregaron soluciones prácticas.",

    // Contact
    "contact.title": "Gracias por acercarse a Zibra",
    "contact.subtitle": "Hablemos sobre cómo podemos ayudar a tu negocio a alcanzar sus objetivos",
    "contact.form.name": "Nombre Completo",
    "contact.form.email": "Correo Electrónico",
    "contact.form.phone": "Número de Teléfono",
    "contact.form.company": "Nombre de la Empresa",
    "contact.form.message": "Cuéntanos sobre las necesidades de tu negocio",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.sendEmail": "Enviar Email",
    "contact.form.sendWhatsApp": "WhatsApp",
    "contact.email.subject": "Consulta Empresarial",
    "contact.email.name": "Nombre",
    "contact.email.email": "Email",
    "contact.email.phone": "Teléfono",
    "contact.email.company": "Empresa",
    "contact.email.message": "Mensaje",
    "contact.whatsapp.title": "Consulta Empresarial desde el Sitio Web",
    "contact.info.title": "Información de Contacto",
    "contact.info.phone": "Teléfono",
    "contact.info.email": "Correo",
    "contact.info.address": "Dirección",

    // Clients
    "clients.badge": "Nuestros Clientes",
    "clients.title": "Confianza de Empresas Líderes",
    "clients.subtitle": "Trabajamos con empresas innovadoras de diversas industrias para impulsar crecimiento y éxito",

    // FAQ
    "faq.badge": "¿Preguntas?",
    "faq.title": "Preguntas Frecuentes",
    "faq1.q": "¿Con qué industrias trabajan?",
    "faq1.a":
      "Trabajamos con empresas de todas las industrias, incluyendo tecnología, retail, manufactura, servicios y más. Nuestras soluciones se personalizan según las necesidades únicas de cada sector.",
    "faq2.q": "¿Cuánto dura un compromiso típico de consultoría?",
    "faq2.a":
      "La duración del compromiso varía según el alcance del proyecto. Los proyectos a corto plazo pueden durar 3-6 meses, mientras que las transformaciones integrales pueden extenderse a 12+ meses.",
    "faq3.q": "¿Cuál es su enfoque de consultoría?",
    "faq3.a":
      "Adoptamos un enfoque colaborativo basado en datos. Trabajamos estrechamente con tu equipo para comprender los desafíos, analizar datos e implementar soluciones prácticas que entreguen resultados medibles.",
    "faq4.q": "¿Ofrecen soporte continuo?",
    "faq4.a":
      "¡Sí! Proporcionamos soporte continuo y servicios de asesoría para asegurar el éxito a largo plazo y ayudarte a adaptarte a las condiciones comerciales cambiantes.",
    "faq5.q": "¿Cómo miden el éxito?",
    "faq5.a":
      "Establecemos KPIs claros al inicio de cada compromiso y rastreamos el progreso regularmente. El éxito se mide por mejoras tangibles en eficiencia, ingresos u otras métricas acordadas.",
    "faq6.q": "¿Cuáles son sus tarifas?",
    "faq6.a":
      "Nuestras tarifas varían según el alcance y la complejidad del proyecto. Ofrecemos modelos de precios flexibles que incluyen tarifas por proyecto, retención y por hora. Contáctanos para una cotización personalizada.",

    // CTA
    "cta.title": "¿Listo para Transformar Tu Negocio?",
    "cta.subtitle":
      "Únete a cientos de empresas exitosas que han alcanzado sus objetivos con nuestra orientación experta. Tu historia de éxito comienza aquí.",
    "cta.button.primary": "Agendar Consulta",
    "cta.button.secondary": "Saber Más",
    "cta.note": "Consulta inicial gratuita • Soluciones personalizadas • Resultados comprobados",

    // Footer
    "footer.tagline": "Consultoría empresarial estratégica para crecimiento sostenible",
    "footer.links": "Enlaces Rápidos",
    "footer.support": "Soporte",
    "footer.connect": "Conectar",
    "footer.copyright": "2025 Zibra Consultora. Todos los derechos reservados.",
    "footer.certified": "Equipo de consultoría certificado",
    "footer.contact": "Contacto",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language
    if (stored && (stored === "en" || stored === "es")) {
      setLanguage(stored)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const langTranslations = (translations as any)[language] as Record<string, string> | undefined
    return langTranslations?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
