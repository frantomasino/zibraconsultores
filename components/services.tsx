"use client"

import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"

type ServiceItem = {
  iconSrc: string
  iconAlt: string
  titleKey: string
  descKey: string
  titleFallback: string
  descFallback: string
  href: string
}

export function Services() {
  const { t } = useLanguage()
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement | null>(null)

  // ✅ Replay del título cada 45s
  const REPLAY_MS = 45_000
  const [titleCycle, setTitleCycle] = useState(0)

  // ✅ Fallback si viene vacío/undefined o si no existe la key
  const tr = (key: string, fallback: string) => {
    const value = t(key)
    if (!value || value === key) return fallback
    return value
  }

  const services: ServiceItem[] = useMemo(
    () => [
      {
        iconSrc: "/icons/services/strategy.webp",
        iconAlt: "Planificación Estratégica",
        titleKey: "services.strategy.title",
        descKey: "services.strategy.desc",
        titleFallback: "Planificación Estratégica",
        descFallback: "Definimos una hoja de ruta clara para crecer con foco y orden.",
        href: "/contacto?servicio=planificacion-estrategica",
      },
      {
        iconSrc: "/icons/services/operations.webp",
        iconAlt: "Optimización de Operaciones",
        titleKey: "services.operations.title",
        descKey: "services.operations.desc",
        titleFallback: "Optimización de Operaciones",
        descFallback: "Mejoramos procesos y eficiencia para reducir costos y tiempos.",
        href: "/contacto?servicio=optimizacion-operaciones",
      },
      {
        iconSrc: "/icons/services/finance.webp",
        iconAlt: "Consultoría Financiera",
        titleKey: "services.financial.title",
        descKey: "services.financial.desc",
        titleFallback: "Consultoría Financiera",
        descFallback: "Análisis y control financiero para decisiones más seguras.",
        href: "/contacto?servicio=consultoria-financiera",
      },
      {
        iconSrc: "/icons/services/hr.webp",
        iconAlt: "Recursos Humanos",
        titleKey: "services.hr.title",
        descKey: "services.hr.desc",
        titleFallback: "Recursos Humanos",
        descFallback: "Estructura, roles, cultura y herramientas para equipos sólidos.",
        href: "/contacto?servicio=recursos-humanos",
      },
      {
        iconSrc: "/icons/services/tech.webp",
        iconAlt: "Integración Tecnológica",
        titleKey: "services.tech.title",
        descKey: "services.tech.desc",
        titleFallback: "Integración Tecnológica",
        descFallback: "Ordenamos sistemas y automatizamos para escalar sin caos.",
        href: "/contacto?servicio=integracion-tecnologica",
      },
      {
        iconSrc: "/icons/services/growth.webp",
        iconAlt: "Estrategia de Crecimiento",
        titleKey: "services.growth.title",
        descKey: "services.growth.desc",
        titleFallback: "Estrategia de Crecimiento",
        descFallback: "Estrategia y ejecución para aumentar ventas de forma sustentable.",
        href: "/contacto?servicio=estrategia-crecimiento",
      },
    ],
    [],
  )

  // ✅ Cards: aparecen una vez al entrar (stagger)
  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    setVisibleCards(new Array(services.length).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return

        services.forEach((_, index) => {
          window.setTimeout(() => {
            setVisibleCards((prev) => {
              const next = prev.length ? [...prev] : new Array(services.length).fill(false)
              next[index] = true
              return next
            })
          }, index * 150)
        })

        observer.disconnect()
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [services])

  // ✅ Título: re-lanzar animación cada 45s (aunque no scrollees)
  useEffect(() => {
    const id = window.setInterval(() => setTitleCycle((v) => v + 1), REPLAY_MS)
    return () => window.clearInterval(id)
  }, [])

  const mainTitle = tr("services.mainTitle", "Lo que podemos hacer")
  const mainTitleHighlight = tr("services.mainTitleHighlight", "por su empresa")

  // 🎛️ Más lento (título)
  const TITLE_STAGGER = 0.16
  const WORD_DURATION = 0.8
  const WORD_Y = 16
  const UNDERLINE_DELAY = 0.9
  const UNDERLINE_DURATION = 1.1

  return (
    <section id="services" className="bg-background py-20 md:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.9 }}
            className="mb-5 flex justify-center"
          >
            <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
              {tr("services.badge", "Nuestros Servicios")}
            </span>
          </motion.div>

          {/* ✅ key cambia cada 45s => se remonta => se reinicia animación */}
          <motion.h2
            key={`services-title-${titleCycle}`}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: TITLE_STAGGER } },
            }}
            className="text-4xl md:text-5xl text-foreground mb-4"
          >
            <span className="inline-block">
              {mainTitle.split(" ").map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: WORD_Y },
                    show: { opacity: 1, y: 0, transition: { duration: WORD_DURATION } },
                  }}
                  className="inline-block"
                >
                  {w}
                  <span className="inline-block">&nbsp;</span>
                </motion.span>
              ))}
            </span>

            <span className="relative inline-block text-[#2E2F84]">
              {mainTitleHighlight.split(" ").map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: WORD_Y },
                    show: { opacity: 1, y: 0, transition: { duration: WORD_DURATION } },
                  }}
                  className="inline-block"
                >
                  {w}
                  <span className="inline-block">&nbsp;</span>
                </motion.span>
              ))}

              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: UNDERLINE_DURATION, delay: UNDERLINE_DELAY }}
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-border"
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.95, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            {tr(
              "services.subtitle",
              "Servicios de consultoría personalizados diseñados para impulsar la transformación de tu pyme y llevarla al próximo nivel",
            )}
          </motion.p>
        </div>

        {/* ✅ auto-rows-fr para igualar altura de cards en la fila */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((service, index) => {
            const isVisible = !!visibleCards[index]

            return (
              <div
                key={service.titleKey}
                className={[
                  "group relative bg-card border border-border rounded-xl p-8 transition-all duration-500",
                  "hover:shadow-lg hover:-translate-y-1 hover:border-accent/50",
                  "focus-within:outline-none focus-within:ring-2 focus-within:ring-accent/60 focus-within:ring-offset-2 focus-within:ring-offset-background",
                  "flex flex-col h-full",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                ].join(" ")}
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(600px circle at 30% 20%, rgba(255,255,255,0.08), transparent 40%)",
                  }}
                />

                {/* ✅ Icono WEBP 40x40 */}
                <div className="mb-5">
                  <img
                    src={service.iconSrc}
                    alt={service.iconAlt}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {tr(service.titleKey, service.titleFallback)}
                </h3>

                <p className="text-muted-foreground">{tr(service.descKey, service.descFallback)}</p>

                {/* ✅ “Saber más” igual al estilo original, pero un poco más grande y más oscuro */}
                <a
                  href={service.href}
                  className="mt-auto pt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-foreground"
                  aria-label={`${tr(service.titleKey, service.titleFallback)} - ${tr("services.cardCta", "Saber más")}`}
                >
                  <span className="opacity-95 group-hover:opacity-100 transition-opacity">
                    {tr("services.cardCta", "Saber más")}
                  </span>
                  <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
