"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"

type ServiceItem = {
  key: string
  iconSrc: string
  iconAlt: string
  titleKey: string
  descKey: string
  titleFallback: string
  descFallback: string
  href: string
  points: Array<{ key: string; fallback: string }>
}

export function Services() {
  const { t } = useLanguage()
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement | null>(null)

  const REPLAY_MS = 45_000
  const [titleCycle, setTitleCycle] = useState(0)

  const tr = (key: string, fallback: string) => {
    const value = t(key)
    if (!value || value === key) return fallback
    return value
  }

  const services: ServiceItem[] = useMemo(
    () => [
      {
        key: "strategy",
        iconSrc: "/icons/services/strategy.webp",
        iconAlt: "Icono de planificación estratégica",
        titleKey: "services.strategy.title",
        descKey: "services.strategy.desc",
        titleFallback: "Planificación Estratégica",
        descFallback: "Definimos una hoja de ruta clara para crecer con foco y orden.",
        href: "/contacto?servicio=planificacion-estrategica",
        points: [
          { key: "services.strategy.point1", fallback: "Diagnóstico y objetivos claros." },
          { key: "services.strategy.point2", fallback: "Plan por etapas, medible y realista." },
          { key: "services.strategy.point3", fallback: "Seguimiento y ajustes continuos." },
        ],
      },
      {
        key: "operations",
        iconSrc: "/icons/services/operations.webp",
        iconAlt: "Icono de optimización de operaciones",
        titleKey: "services.operations.title",
        descKey: "services.operations.desc",
        titleFallback: "Optimización de Operaciones",
        descFallback: "Mejoramos procesos y eficiencia para reducir costos y tiempos.",
        href: "/contacto?servicio=optimizacion-operaciones",
        points: [
          { key: "services.operations.point1", fallback: "Mapeo de procesos y cuellos de botella." },
          { key: "services.operations.point2", fallback: "Estandarización y mejora continua." },
          { key: "services.operations.point3", fallback: "Indicadores y control de gestión." },
        ],
      },
      {
        key: "financial",
        iconSrc: "/icons/services/finance.webp",
        iconAlt: "Icono de consultoría financiera",
        titleKey: "services.financial.title",
        descKey: "services.financial.desc",
        titleFallback: "Consultoría Financiera",
        descFallback: "Análisis y control financiero para decisiones más seguras.",
        href: "/contacto?servicio=consultoria-financiera",
        points: [
          { key: "services.financial.point1", fallback: "Tablero de gestión y métricas." },
          { key: "services.financial.point2", fallback: "Proyecciones y escenarios." },
          { key: "services.financial.point3", fallback: "Orden y disciplina financiera." },
        ],
      },
      {
        key: "people",
        iconSrc: "/icons/services/hr.webp",
        iconAlt: "Icono de recursos humanos",
        titleKey: "services.hr.title",
        descKey: "services.hr.desc",
        titleFallback: "Recursos Humanos",
        descFallback: "Estructura, roles, cultura y herramientas para equipos sólidos.",
        href: "/contacto?servicio=recursos-humanos",
        points: [
          { key: "services.people.point1", fallback: "Roles, responsabilidades y estructura." },
          { key: "services.people.point2", fallback: "Procesos de selección y onboarding." },
          { key: "services.people.point3", fallback: "Hábitos de gestión y performance." },
        ],
      },
      {
        key: "tech",
        iconSrc: "/icons/services/tech.webp",
        iconAlt: "Icono de integración tecnológica",
        titleKey: "services.tech.title",
        descKey: "services.tech.desc",
        titleFallback: "Integración Tecnológica",
        descFallback: "Ordenamos sistemas y automatizamos para escalar sin caos.",
        href: "/contacto?servicio=integracion-tecnologica",
        points: [
          { key: "services.tech.point1", fallback: "Diagnóstico de herramientas y flujos." },
          { key: "services.tech.point2", fallback: "Automatización y estandarización." },
          { key: "services.tech.point3", fallback: "Implementación con soporte." },
        ],
      },
      {
        key: "growth",
        iconSrc: "/icons/services/growth.webp",
        iconAlt: "Icono de estrategia de crecimiento",
        titleKey: "services.growth.title",
        descKey: "services.growth.desc",
        titleFallback: "Estrategia de Crecimiento",
        descFallback: "Estrategia y ejecución para aumentar ventas de forma sustentable.",
        href: "/contacto?servicio=estrategia-crecimiento",
        points: [
          { key: "services.growth.point1", fallback: "Oferta, pricing y posicionamiento." },
          { key: "services.growth.point2", fallback: "Proceso comercial y seguimiento." },
          { key: "services.growth.point3", fallback: "Plan de acción por objetivos." },
        ],
      },
    ],
    [],
  )

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

  useEffect(() => {
    const id = window.setInterval(() => setTitleCycle((v) => v + 1), REPLAY_MS)
    return () => window.clearInterval(id)
  }, [])

  const mainTitle = tr("services.mainTitle", "Lo que podemos hacer")
  const mainTitleHighlight = tr("services.mainTitleHighlight", "por su empresa")

  const TITLE_STAGGER = 0.16
  const WORD_DURATION = 0.8
  const WORD_Y = 16
  const UNDERLINE_DELAY = 0.9
  const UNDERLINE_DURATION = 1.1

  return (
    <section id="services" className="bg-background py-20 md:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center md:mb-16">
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

          <motion.h2
            key={`services-title-${titleCycle}`}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: TITLE_STAGGER } },
            }}
            className="mb-4 text-4xl text-foreground md:text-5xl"
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
            className="mx-auto max-w-3xl text-lg text-muted-foreground"
          >
            {tr(
              "services.subtitle",
              "Servicios de consultoría personalizados diseñados para impulsar la transformación de tu pyme y llevarla al próximo nivel",
            )}
          </motion.p>
        </div>

        <div className="grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isVisible = !!visibleCards[index]

            return (
              <div
                key={service.titleKey}
                id={service.key}
                className={[
                  "group relative flex h-full scroll-mt-28 flex-col rounded-xl border border-border bg-card p-8 transition-all duration-500",
                  "hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg",
                  "focus-within:outline-none focus-within:ring-2 focus-within:ring-accent/60 focus-within:ring-offset-2 focus-within:ring-offset-background",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                ].join(" ")}
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at 30% 20%, rgba(255,255,255,0.08), transparent 40%)",
                  }}
                />

                <div className="mb-5">
                  <Image
                    src={service.iconSrc}
                    alt={service.iconAlt}
                    width={48}
                    height={48}
                    className="block h-12 w-12 object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {tr(service.titleKey, service.titleFallback)}
                </h3>

                <p className="text-muted-foreground">{tr(service.descKey, service.descFallback)}</p>

                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {service.points.map((p) => (
                    <li key={p.key} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                      <span>{tr(p.key, p.fallback)}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-[15px] font-semibold text-foreground"
                  aria-label={`${tr(service.titleKey, service.titleFallback)} - ${tr("services.cardCta", "Saber más")}`}
                >
                  <span className="opacity-95 transition-opacity group-hover:opacity-100">
                    {tr("services.cardCta", "Saber más")}
                  </span>
                  <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}