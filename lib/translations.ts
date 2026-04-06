export type Language = "en" | "es"

export const translations: Record<Language, Record<string, string>> = {
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
    "hero.title": "Management that transforms, business that grows.",
    "hero.subtitle":
      "We advise SMEs and organizations on how to optimize processes, strengthen leadership, and improve team performance by transforming their operations and achieving sustainable growth.",
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
    "successStories.story3.desc":
      "Optimized operations reducing operational costs by 40% while maintaining quality",
    "successStories.story4.metric": "95%",
    "successStories.story4.title": "Goal Achievement",
    "successStories.story4.desc":
      "95% of our clients achieve or exceed their established business goals",

    // Services
    "services.badge": "Our Services",
    "services.mainTitle": "What we can do",
    "services.mainTitleHighlight": "for your company",
    "services.title": "Services",
    "services.subtitle":
      "Personalized consulting services designed to drive the transformation of your SME and take it to the next level",
    "services.viewAll": "View All Services",
    "services.cardCta": "Learn more",
    "services.bottomCtaTitle": "Want a clear, actionable recommendation?",
    "services.bottomCtaDesc": "Tell us about your situation and we’ll propose a results-focused action plan.",
    "services.bottomCtaButton": "Contact",

    "services.strategy.title": "Strategic Planning",
    "services.strategy.desc": "We turn ideas into concrete strategies so your business can grow with focus and achieve results.",
    "services.strategy.point1": "In-depth analysis of your current situation.",
    "services.strategy.point2": "Clear and achievable goals.",
    "services.strategy.point3": "A strategic plan with ongoing monitoring.",

    "services.operations.title": "Operations Optimization",
    "services.operations.desc": "We optimize your processes to achieve greater efficiency, control, and sustainable results.",
    "services.operations.point1": "Mapping of key business processes.",
    "services.operations.point2": "Elimination of inefficiencies and operational errors.",
    "services.operations.point3": "Implementation of KPIs and operational monitoring.",

    "services.financial.title": "Financial Consulting",
    "services.financial.desc": "We turn financial data into clear decisions to help your business grow.",
    "services.financial.point1": "Comprehensive financial analysis of the business.",
    "services.financial.point2": "Planning and scenario analysis.",
    "services.financial.point3": "Reports and performance metrics.",

    "services.hr.title": "Human Resources",
    "services.hr.desc": "We build teams that are dedicated, organized, and results-oriented.",
    "services.people.point1": "Clarity regarding roles and responsibilities.",
    "services.people.point2": "Performance management and leadership.",
    "services.people.point3": "Organizational culture and team alignment.",

    "services.tech.title": "Technology Integration",
    "services.tech.desc": "We transform your business using digital tools to streamline processes and accelerate growth.",
    "services.tech.point1": "Assessment of current systems and workflows.",
    "services.tech.point2": "Automation of key processes.",
    "services.tech.point3": "Implementation and adoption support.",

    "services.growth.title": "Growth Strategy",
    "services.growth.desc": "We drive your company's growth by identifying opportunities and developing concrete expansion plans.",
    "services.growth.point1": "Definition of offer, pricing, and positioning.",
    "services.growth.point2": "Optimization of the sales process and its follow-up.",
    "services.growth.point3": "Action plan aligned with objectives.",

    // About (BASE)
    "about.badge": "About Zibra Consulting",
    "about.title": "Your Partner in Business Excellence",
    "about.intro":
      "We drive your company’s growth with practical solutions.  We streamline processes, optimize resources, and provide clarity so your business runs more smoothly and becomes more profitable.",
    "about.p1":
      "With extensive experience in business advisory, we support organizations in strengthening management, improving execution and achieving sustainable results.",
    "about.p2":
      "We combine strategic vision with hands-on implementation, aligning processes, people and indicators to create measurable improvements.",

    // Values/Certifications
    "about.cert1.title": "Certified Business Professionals",
    "about.cert1.desc": "Experience in advisory and management",
    "about.cert2.title": "Extensive Track Record",
    "about.cert2.desc": "Leadership in corporate and SME environments",
    "about.cert3.title": "Practical Approach",
    "about.cert3.desc": "Clear execution and measurable outcomes",

    // About (Trajectories)
    "about.trajectories.natalia.name": "Natalia Bertoldi",
    "about.trajectories.natalia.title": "Public Accountant",
    "about.trajectories.natalia.p1":
      "Public Accountant with extensive experience in accounting firms and in both private and public sector organizations. Throughout my career, I have worked in auditing, management and control, and in preparing key information for decision-making in national and international companies.",
    "about.trajectories.natalia.p2":
      "I have supported companies through growth and transformation processes, helping build administrative structures, define processes, organize management and form work teams, with a focus on sustainable results.",
    "about.trajectories.natalia.p3":
      "I complement my technical background with certification as an Ontological Coach and Team Coach, integrating a human-centered approach into management. Today, I help companies and organizations professionalize their management, strengthen leadership and improve team performance by aligning processes, people and strategy.",

    "about.trajectories.mariel.name": "Mariel Boquiola",
    "about.trajectories.mariel.title": "Public Accountant",
    "about.trajectories.mariel.p1":
      "Public Accountant with more than 25 years of experience in administration, accounting and management control, developed in corporate companies and SMEs. I have held leadership roles, supporting processes of order, organization and professionalization, always from a comprehensive business perspective.",
    "about.trajectories.mariel.p2":
      "I have experience in cash flow management, financial planning and inventory control, working directly with partners and owners in decision-making. I support companies by bringing predictability, reliable information and professional judgment, with a close, clear working style focused on creating peace of mind in day-to-day management.",

    "about.trajectories.fernando.name": "Fernando Zanchetti",
    "about.trajectories.fernando.title": "Public Accountant • MBA",
    "about.trajectories.fernando.p1":
      "Public Accountant with an MBA, experienced in positions of local and regional responsibility in Planning and Management Control, Finance and Accounting, both in multinationals and SMEs.",
    "about.trajectories.fernando.p2":
      "I have led processes for defining financial strategies, business valuations and process improvements, applying international standards and management tools. I support companies in strategic decision-making, bringing business vision, financial analysis, and a focus on efficiency and results.",

    "about.trajectories.title": "Professional background",
    "about.values.title": "Certifications",

    // Testimonials
    "testimonials.badge": "Success Stories",
    "testimonials.title": "What Our Clients Say",
    "testimonial1.name": "Carlos Mendoza",
    "testimonial1.role": "CEO, Tech Innovations",
    "testimonial1.quote":
      "Zibra Consulting transformed our operations. Their strategic insights helped us increase efficiency by 40% in just 6 months.",
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
    "contact.form.cardTitle": "Request a Quote",
    "contact.form.maxChars": "Up to 500 characters",
    "contact.form.cta": "Request a Quote",
    "contact.info.addressLine1": "Quilmes.Buenos Aires Province",
    "contact.info.phoneLine1": "+54 9 113009384",
    "contact.info.phoneLine2": "+54 9 1162497623",
    "contact.info.phoneLine3": "+54 9 1156399323",
    "contact.info.emailLine": "prueba@gmail.com",
    "contact.info.hours": "Hours",
    "contact.info.hoursLine": "Mon to Fri 9:00 to 18:00",
    "contact.urgent.title": "Need urgent assistance?",
    "contact.urgent.subtitle": "Contact us via WhatsApp for quick questions",
    "contact.urgent.cta": "Chat on WhatsApp",
    "contact.whatsapp.quickText": "Hi! I have a quick question.",
    "contact.toast.whatsappTitle": "WhatsApp opened",
    "contact.toast.whatsappDesc": "We opened WhatsApp with your message ready.",

    // Clients
    "clients.badge": "Success Cases",
    "clients.sectionLabel": "Our Clients",
    "clients.title": "Companies That Trusted Us",
    "clients.subtitle": "Real results that speak for themselves",

    "clients.aliwen.name": "Aliwen - Natural Store",
    "clients.aliwen.industry": "Online Natural Store",
    "clients.aliwen.category": "Dietética Online",
    "clients.aliwen.description":
      "A business that was already operating, but with a structure that limited its growth. We worked on analyzing its potential, making strategic investment decisions, reorganizing tasks, professionalizing management, strengthening social media resources, expanding sales channels, and implementing a management system.",
    "clients.aliwen.challengeDesc":
      "The business was already operating, but with a structure that limited its growth.",
    "clients.aliwen.solutionDesc":
      "Business potential analysis, strategic investment decision, task reorganization, management professionalization, social media resources, expansion of sales channels, and implementation of a management system.",
    "clients.aliwen.result1": "Growth",
    "clients.aliwen.result1Label": "Business potential",
    "clients.aliwen.result2": "Order",
    "clients.aliwen.result2Label": "Management",
    "clients.aliwen.result3": "Scale",
    "clients.aliwen.result3Label": "Sales channels",

    "clients.telasClaudia.name": "Telas Claudia",
    "clients.telasClaudia.industry": "Textile Distributor",
    "clients.telasClaudia.category": "TEXTILE",
    "clients.telasClaudia.description":
      "Textile distributor based in Chile, focused on wholesale and retail sales. Through strategic analysis, we identified the opportunity to add trimming products as a complementary business line, improved profitability, diversified the offer, reviewed margins, and supported the expansion to a larger store.",
    "clients.telasClaudia.result1": "More",
    "clients.telasClaudia.result1Label": "Profitability",
    "clients.telasClaudia.result2": "Broader",
    "clients.telasClaudia.result2Label": "Value proposal",
    "clients.telasClaudia.result3": "Higher",
    "clients.telasClaudia.result3Label": "Competitiveness",

    "clients.cea.name": "Cursos Cea",
    "clients.cea.industry": "Educational Institute",
    "clients.cea.category": "EDUCATION",
    "clients.cea.description":
      "Educational institute in Lomas de Zamora with more than 30 years of experience. Its reach was limited to local students. We led a full transformation process: redesigning the model to online format, training in digital tools, and defining a communication and student acquisition strategy.",
    "clients.cea.result1": "Online",
    "clients.cea.result1Label": "New offering",
    "clients.cea.result2": "More",
    "clients.cea.result2Label": "Enrollments",
    "clients.cea.result3": "National",
    "clients.cea.result3Label": "Expansion",

    "clients.dimayer.name": "Dimayer",
    "clients.dimayer.industry": "Metalworking Company",
    "clients.dimayer.category": "INDUSTRY",
    "clients.dimayer.description":
      "Metalworking company dedicated to manufacturing parts and structures. It had a good workload but poorly organized processes. We optimized production flow, identified bottlenecks, implemented simple planning, defined roles and responsibilities, and added follow-up and control habits.",
    "clients.dimayer.result1": "Better",
    "clients.dimayer.result1Label": "Delivery times",
    "clients.dimayer.result2": "More",
    "clients.dimayer.result2Label": "Production predictability",
    "clients.dimayer.result3": "Less",
    "clients.dimayer.result3Label": "Operational chaos",

    "clients.challengeTitle": "Challenge",
    "clients.solutionTitle": "Solution",
    "clients.resultsTitle": "Results",

    "clients.telasClaudia.challengeDesc":
      "The company had growth potential, but needed to improve profitability, diversify its offer, and strengthen its commercial approach to sustain expansion.",
    "clients.telasClaudia.solutionDesc":
      "We carried out a strategic analysis, identified the opportunity to incorporate trimming products as a complementary line, reviewed margins by product, improved the commercial approach, and supported the expansion to a larger store.",

    "clients.cea.challengeDesc":
      "The institute needed to expand nationally, incorporate technology without losing educational quality, build an attractive online proposal, and overcome resistance to change.",
    "clients.cea.solutionDesc":
      "We led a full transformation process: redesigning the model to online format, training in digital tools, and defining a clear communication and student acquisition strategy.",

    "clients.dimayer.challengeDesc":
      "The company faced disorganized production processes, irregular delivery times, planning difficulties, operational overload on the owners, and missed opportunities due to lack of structure.",
    "clients.dimayer.solutionDesc":
      "We analyzed production processes, detected bottlenecks, organized the workflow in the plant, implemented a simple order-planning system, defined roles and responsibilities, and introduced follow-up and control routines.",

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
    "footer.copyright": "2026 Zibra Consulting. All rights reserved.",
    "footer.certified": "Consulting team",
    "footer.contact": "Contact",
  },

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
    "hero.title": "Gestión que se transforma, negocio que crece.",
    "hero.subtitle":
      "Asesoramos a pymes y organizaciones para optimizar procesos, fortalecer el liderazgo y mejorar el desempeño de los equipos transformando sus operaciones y logrando un crecimiento sostenible",
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
    "successStories.subtitle":
      "Resultados reales que demuestran nuestro compromiso con la excelencia empresarial",
    "successStories.story1.metric": "+150%",
    "successStories.story1.title": "Crecimiento en Ingresos",
    "successStories.story1.desc":
      "Ayudamos a una empresa retail a triplicar sus ingresos mediante planificación estratégica y expansión de mercado",
    "successStories.story2.metric": "500+",
    "successStories.story2.title": "Equipos Capacitados",
    "successStories.story2.desc":
      "Desarrollamos y capacitamos equipos de alto rendimiento en múltiples industrias",
    "successStories.story3.metric": "40%",
    "successStories.story3.title": "Reducción de Costos",
    "successStories.story3.desc":
      "Optimizamos operaciones reduciendo costos operativos en 40% manteniendo la calidad",
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
      "Servicios de consultoría personalizados diseñados para impulsar la transformación de tu pyme y llevarla al próximo nivel",
    "services.viewAll": "Ver Todos los Servicios",
    "services.cardCta": "Saber más",
    "services.bottomCtaTitle": "¿Querés una recomendación clara y accionable?",
    "services.bottomCtaDesc":
      "Contanos tu situación y te proponemos un plan de trabajo con foco en resultados.",
    "services.bottomCtaButton": "Contactar",

    "services.strategy.title": "Planificación Estratégica",
    "services.strategy.desc": "Impulsamos ideas hacia estrategias concretas para que tu empresa crezca con foco y resultados.",
    "services.strategy.point1": "Análisis profundo de tu situación actual.",
    "services.strategy.point2": "Objetivos claros y alcanzables.",
    "services.strategy.point3": "Plan estratégico con seguimiento continuo.",

    "services.operations.title": "Optimización de Operaciones",
    "services.operations.desc": "Optimizamos tus procesos para lograr mayor eficiencia, control y resultados sostenibles.",
    "services.operations.point1": "Mapeo de procesos clave del negocio.",
    "services.operations.point2": "Eliminación de ineficiencias y errores operativos.",
    "services.operations.point3": "Implementación de KPIs y seguimiento operativo.",

    "services.financial.title": "Consultoría Financiera",
    "services.financial.desc": "Convertimos la información financiera en decisiones claras para hacer crecer tu empresa.",
    "services.financial.point1": "Análisis financiero integral del negocio.",
    "services.financial.point2": "Planificación y proyección de escenarios.",
    "services.financial.point3": "Reportes e indicadores de rendimiento.",

    "services.hr.title": "Recursos Humanos",
    "services.hr.desc": "Desarrollamos equipos comprometidos, organizados y enfocados en resultados.",
    "services.people.point1": "Claridad en roles y responsabilidades.",
    "services.people.point2": "Gestión del desempeño y liderazgo.",
    "services.people.point3": "Cultura organizacional y alineación del equipo.",

    "services.tech.title": "Integración Tecnológica",
    "services.tech.desc": "Transformamos tu operación mediante herramientas digitales para optimizar procesos y acelerar el crecimiento.",
    "services.tech.point1": "Evaluación de sistemas y flujos actuales.",
    "services.tech.point2": "Automatización de procesos clave.",
    "services.tech.point3": "Implementación y soporte en la adopción.",

    "services.growth.title": "Estrategia de Crecimiento",
    "services.growth.desc": "Impulsamos el crecimiento de tu empresa identificando oportunidades y desarrollando planes concretos de expansión.",
    "services.growth.point1": "Definición de oferta, pricing y posicionamiento.",
    "services.growth.point2": "Optimización del proceso comercial y su seguimiento.",
    "services.growth.point3": "Plan de acción alineado a objetivos.",

    // About (BASE)
    "about.badge": "Sobre Zibra Consultora",
    "about.title": "Tu Socio en la Excelencia Empresarial",
    "about.intro":
      "Impulsamos el crecimiento de tu empresa con soluciones concretas. Ordenamos procesos, optimizamos recursos y te damos claridad para que tu negocio funcione mejor y sea más rentable.",
    "about.p1":
      "Con amplia experiencia en asesoramiento empresarial, acompañamos a organizaciones a fortalecer su gestión, mejorar la ejecución y lograr resultados sostenibles.",
    "about.p2":
      "Combinamos visión estratégica con implementación práctica, alineando procesos, personas e indicadores para generar mejoras medibles.",

    // Values/Certifications
    "about.cert1.title": "Profesionales Certificados",
    "about.cert1.desc": "Experiencia en gestión y asesoramiento",
    "about.cert2.title": "Trayectoria Comprobada",
    "about.cert2.desc": "Liderazgo en entornos corporativos y pymes",
    "about.cert3.title": "Enfoque Práctico",
    "about.cert3.desc": "Ejecución clara y resultados medibles",

    // About (Trayectorias)
    "about.trajectories.natalia.name": "Natalia Bertoldi",
    "about.trajectories.natalia.title": "Contadora Pública",
    "about.trajectories.natalia.p1":
      "Contadora Pública, con una amplia trayectoria en estudios contables y en organizaciones del sector privado y público. A lo largo de mi carrera he trabajado en auditoría, gestión y control, y en la elaboración de información clave para la toma de decisiones en empresas nacionales y extranjeras.",
    "about.trajectories.natalia.p2":
      "He acompañado a empresas en procesos de crecimiento y transformación, participando en el armado de estructuras administrativas, definición de procesos, ordenamiento de la gestión y conformación de equipos de trabajo, con foco en resultados sostenibles.",
    "about.trajectories.natalia.p3":
      "Complemento mi formación técnica con certificación como Coach Ontológica y Coach de Equipos, integrando una mirada humana a la gestión. Actualmente acompaño a empresas y organizaciones a profesionalizar su gestión, fortalecer liderazgos y mejorar el desempeño de sus equipos, alineando procesos, personas y estrategia.",

    "about.trajectories.mariel.name": "Mariel Boquiola",
    "about.trajectories.mariel.title": "Contadora Pública",
    "about.trajectories.mariel.p1":
      "Contadora Pública con más de 25 años de experiencia en administración, contabilidad y control de gestión, desarrollada en empresas corporativas y pymes. He ocupado roles de liderazgo, acompañando procesos de orden, organización y profesionalización, siempre desde una mirada integral del negocio.",
    "about.trajectories.mariel.p2":
      "Cuento con experiencia en gestión del cash flow, planificación financiera y control de stock, trabajando de manera directa con socios y dueños en la toma de decisiones. Acompaño a las empresas aportando previsibilidad, información confiable y criterio profesional, con un estilo de trabajo cercano, claro y orientado a generar tranquilidad en la gestión diaria.",

    "about.trajectories.fernando.name": "Fernando Zanchetti",
    "about.trajectories.fernando.title": "Contador Público • MBA",
    "about.trajectories.fernando.p1":
      "Contador Público con Maestría en Administración de Negocios, con experiencia en posiciones de responsabilidad en Planeamiento y Control de Gestión, Finanzas y Contabilidad, tanto en multinacionales como en pymes.",
    "about.trajectories.fernando.p2":
      "He liderado procesos de definición de estrategias financieras, valuaciones de negocios y mejora de procesos, aplicando normas internacionales y herramientas de gestión. Acompaño a las organizaciones en la toma de decisiones estratégicas, aportando visión de negocio, análisis financiero y foco en la eficiencia y los resultados.",

    "about.trajectories.title": "Trayectoria profesional",
    "about.values.title": "Certificaciones",

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
    "contact.badge": "Empecemos",
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
    "contact.info.phone": "Teléfonos",
    "contact.info.email": "Correo",
    "contact.info.address": "Dirección",
    "contact.form.cardTitle": "Solicitar Presupuesto",
    "contact.form.maxChars": "Máximo 500 caracteres",
    "contact.form.cta": "Solicitar Presupuesto",
    "contact.info.addressLine1": "Quilmes. Provincia de Buenos Aires",
    "contact.info.phoneLine1": "+54 9 113009384",
    "contact.info.phoneLine2": "+54 9 1162497623",
    "contact.info.phoneLine3": "+54 9 1156399323",
    "contact.info.emailLine": "prueba@gmail.com",
    "contact.info.hours": "Horarios",
    "contact.info.hoursLine": "Lun a Vie 9:00 a 18:00",
    "contact.urgent.title": "¿Necesitás atención urgente?",
    "contact.urgent.subtitle": "Contactanos directamente por WhatsApp para consultas rápidas",
    "contact.urgent.cta": "Chatear por WhatsApp",
    "contact.whatsapp.quickText": "Hola! Necesito una consulta rápida.",
    "contact.toast.whatsappTitle": "WhatsApp abierto",
    "contact.toast.whatsappDesc": "Te llevamos a WhatsApp con el mensaje listo.",

    // Clients
    "clients.badge": "Casos de Éxito",
    "clients.sectionLabel": "Nuestros clientes",
    "clients.title": "Empresas que confiaron en nosotros",
    "clients.subtitle": "Resultados reales que hablan por sí solos",

    "clients.aliwen.name": "Aliwen",
    "clients.aliwen.industry": "Tienda Natural",
    "clients.aliwen.category": "Dietética Online",
    "clients.aliwen.description":
      "El negocio ya estaba en marcha, pero con una estructura que limitaba su crecimiento. Trabajamos en el análisis del potencial del negocio, la decisión de inversión estratégica, la reorganización de tareas, la profesionalización de la gestión, los recursos para redes sociales, la ampliación de canales de venta y la implementación de un sistema de gestión.",
    "clients.aliwen.challengeDesc":
      "El negocio ya estaba en marcha, pero con una estructura que limitaba su crecimiento.",
    "clients.aliwen.solutionDesc":
      "Análisis del potencial del negocio, decisión de inversión estratégica, reorganización de tareas, profesionalización de la gestión, recursos para redes sociales, ampliación de canales de venta e implementación de sistema de gestión.",
    "clients.aliwen.result1": "Impulso",
    "clients.aliwen.result1Label": "Potencial del negocio",
    "clients.aliwen.result2": "Orden",
    "clients.aliwen.result2Label": "Gestión",
    "clients.aliwen.result3": "Escala",
    "clients.aliwen.result3Label": "Canales de venta",

    "clients.telasClaudia.name": "Telas Claudia",
    "clients.telasClaudia.industry": "Distribuidora Textil",
    "clients.telasClaudia.category": "TEXTIL",
    "clients.telasClaudia.description":
      "Distribuidora de telas ubicada en Chile, con trayectoria en el mercado textil y foco en venta mayorista y minorista. Se identificó la oportunidad de incorporar cordonería como línea complementaria, se trabajó en la diversificación de la oferta, el enfoque comercial, la evaluación de márgenes y el acompañamiento en la expansión a un local más amplio.",
    "clients.telasClaudia.result1": "Más",
    "clients.telasClaudia.result1Label": "Rentabilidad",
    "clients.telasClaudia.result2": "Mayor",
    "clients.telasClaudia.result2Label": "Propuesta de valor",
    "clients.telasClaudia.result3": "+",
    "clients.telasClaudia.result3Label": "Competitividad",

    "clients.cea.name": "Cursos Cea",
    "clients.cea.industry": "Instituto",
    "clients.cea.category": "EDUCACIÓN",
    "clients.cea.description":
      "Instituto de enseñanza con trayectoria presencial ubicado en Lomas de Zamora, con más de 30 años formando profesionales. Su alcance estaba limitado a alumnos de su zona. Trabajamos en un proceso integral de transformación: rediseño del modelo hacia formato online, capacitación en herramientas digitales y definición de una estrategia clara de comunicación y captación de alumnos.",
    "clients.cea.result1": "Online",
    "clients.cea.result1Label": "Nueva oferta",
    "clients.cea.result2": "Más",
    "clients.cea.result2Label": "Inscripciones",
    "clients.cea.result3": "Nacional",
    "clients.cea.result3Label": "Expansión",

    "clients.dimayer.name": "Dimayer",
    "clients.dimayer.industry": "Empresa Metalúrgica",
    "clients.dimayer.category": "INDUSTRIA",
    "clients.dimayer.description":
      "Empresa metalúrgica dedicada a la fabricación de piezas y estructuras. Tenía buen nivel de trabajo, pero con procesos poco organizados. Desde la consultoría trabajamos en el análisis de procesos productivos, la organización del flujo de trabajo, la implementación de un sistema simple de planificación, la definición de roles y la incorporación de hábitos de seguimiento y control.",
    "clients.dimayer.result1": "Mejora",
    "clients.dimayer.result1Label": "Tiempos de entrega",
    "clients.dimayer.result2": "Mayor",
    "clients.dimayer.result2Label": "Previsibilidad",
    "clients.dimayer.result3": "Menos",
    "clients.dimayer.result3Label": "Caos operativo",

    "clients.challengeTitle": "Desafío",
    "clients.solutionTitle": "Solución",
    "clients.resultsTitle": "Resultados",

    "clients.telasClaudia.challengeDesc":
      "La empresa tenía potencial de crecimiento, pero necesitaba mejorar su rentabilidad, diversificar la oferta y fortalecer su enfoque comercial para sostener la expansión.",
    "clients.telasClaudia.solutionDesc":
      "Se realizó un análisis estratégico, se identificó la oportunidad de incorporar cordonería como línea complementaria, se evaluaron márgenes por producto, se trabajó el enfoque comercial y se acompañó la expansión a un local más amplio.",

    "clients.cea.challengeDesc":
      "El instituto necesitaba expandirse a nivel nacional, incorporar tecnología sin perder calidad educativa, generar una propuesta online atractiva y superar la resistencia al cambio.",
    "clients.cea.solutionDesc":
      "Trabajamos en un proceso integral de transformación: rediseño del modelo hacia formato online, capacitación en herramientas digitales y definición de una estrategia clara de comunicación y captación de alumnos.",

    "clients.dimayer.challengeDesc":
      "La empresa enfrentaba procesos productivos poco organizados, tiempos de entrega irregulares, dificultades para planificar pedidos, sobrecarga operativa en los dueños y pérdida de oportunidades por falta de estructura.",
    "clients.dimayer.solutionDesc":
      "Desde la consultoría trabajamos en el análisis de procesos productivos, la detección de cuellos de botella, la organización del flujo de trabajo en planta, la implementación de un sistema simple de planificación, la definición de roles y la incorporación de hábitos de seguimiento y control.",

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
    "footer.copyright": "2026 Zibra Consultora. Todos los derechos reservados.",
    "footer.certified": "Equipo de consultores",
    "footer.contact": "Contacto",
  },
}