"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Target, Settings, DollarSign, Users, Cpu, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react"
import { useMemo } from "react"

type ServiceCard = {
  key: string
  icon: JSX.Element
  titleKey: string
  descKey: string
  titleFallback: string
  descFallback: string
  href: string
  points: Array<{ key: string; fallback: string }>
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export function ServicesPreview() {
  const { t } = useLanguage()

  const tr = (key: string, fallback: string) => {
    const value = t(key)
    if (!value || value === key) return fallback
    return value
  }

  const cards: ServiceCard[] = useMemo(
    () => [
      {
        key: "strategy",
        icon: <Target className="h-6 w-6" />,
        titleKey: "services.strategy.title",
        descKey: "services.strategy.desc",
        titleFallback: "Planificación Estratégica",
        descFallback: "Hojas de ruta claras y estrategias accionables para el largo plazo.",
        href: "/servicios#services",
        points: [
          { key: "services.strategy.point1", fallback: "Diagnóstico y objetivos claros." },
          { key: "services.strategy.point2", fallback: "Plan por etapas, medible y realista." },
          { key: "services.strategy.point3", fallback: "Seguimiento y ajustes continuos." },
        ],
      },
      {
        key: "operations",
        icon: <Settings className="h-6 w-6" />,
        titleKey: "services.operations.title",
        descKey: "services.operations.desc",
        titleFallback: "Optimización de Operaciones",
        descFallback: "Procesos más eficientes, menos fricción y mayor control operativo.",
        href: "/servicios#services",
        points: [
          { key: "services.operations.point1", fallback: "Mapeo de procesos y cuellos de botella." },
          { key: "services.operations.point2", fallback: "Estandarización y mejora continua." },
          { key: "services.operations.point3", fallback: "Indicadores y control de gestión." },
        ],
      },
      {
        key: "financial",
        icon: <DollarSign className="h-6 w-6" />,
        titleKey: "services.financial.title",
        descKey: "services.financial.desc",
        titleFallback: "Consultoría Financiera",
        descFallback: "Mejor control, análisis y decisiones financieras con datos.",
        href: "/servicios#services",
        points: [
          { key: "services.financial.point1", fallback: "Tablero de gestión y métricas." },
          { key: "services.financial.point2", fallback: "Proyecciones y escenarios." },
          { key: "services.financial.point3", fallback: "Orden y disciplina financiera." },
        ],
      },
      {
        key: "people",
        icon: <Users className="h-6 w-6" />,
        titleKey: "services.people.title",
        descKey: "services.people.desc",
        titleFallback: "Gestión de Personas",
        descFallback: "Estructura, roles y prácticas para equipos alineados y productivos.",
        href: "/servicios#services",
        points: [
          { key: "services.people.point1", fallback: "Roles, responsabilidades y estructura." },
          { key: "services.people.point2", fallback: "Procesos de selección y onboarding." },
          { key: "services.people.point3", fallback: "Hábitos de gestión y performance." },
        ],
      },
      {
        key: "tech",
        icon: <Cpu className="h-6 w-6" />,
        titleKey: "services.tech.title",
        descKey: "services.tech.desc",
        titleFallback: "Tecnología y Digital",
        descFallback: "Ordenamos sistemas y automatizamos para escalar sin caos.",
        href: "/servicios#services",
        points: [
          { key: "services.tech.point1", fallback: "Diagnóstico de herramientas y flujos." },
          { key: "services.tech.point2", fallback: "Automatización y estandarización." },
          { key: "services.tech.point3", fallback: "Implementación con soporte." },
        ],
      },
      {
        key: "growth",
        icon: <TrendingUp className="h-6 w-6" />,
        titleKey: "services.growth.title",
        descKey: "services.growth.desc",
        titleFallback: "Crecimiento Comercial",
        descFallback: "Estrategia y ejecución para aumentar ventas de forma sustentable.",
        href: "/servicios#services",
        points: [
          { key: "services.growth.point1", fallback: "Oferta, pricing y posicionamiento." },
          { key: "services.growth.point2", fallback: "Proceso comercial y seguimiento." },
          { key: "services.growth.point3", fallback: "Plan de acción por objetivos." },
        ],
      },
    ],
    [],
  )

  return (
    <section id="servicios" className="bg-background py-16 md:py-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12 text-center md:text-left"
        >
          <p className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            {tr("services.badge", "Servicios clave")}
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            {tr("services.title", "Soluciones para cada etapa de tu negocio")}
          </h2>

          <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
            {tr(
              "services.subtitle",
              "Acompañamos a tu empresa en estrategia, operación, finanzas y gestión de personas con un enfoque práctico y medible.",
            )}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((c) => (
            <motion.a
              key={c.key}
              href={c.href}
              variants={item}
              className="
                group relative block overflow-hidden
                bg-card border border-border rounded-2xl p-6 md:p-7
                transition-all duration-500
                hover:shadow-lg hover:-translate-y-1 hover:border-accent/50
                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background
              "
              aria-label={`${tr(c.titleKey, c.titleFallback)} - ${tr("services.cardCta", "Ver más")}`}
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(600px circle at 30% 20%, rgba(255,255,255,0.08), transparent 40%)",
                }}
              />

              <div className="flex items-start gap-4">
                <div
                  className="
                    grid h-11 w-11 place-items-center rounded-xl
                    border border-border bg-background
                    transition-transform duration-300 group-hover:scale-[1.03]
                  "
                >
                  <div className="text-[#2E2F84]">{c.icon}</div>
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                    {tr(c.titleKey, c.titleFallback)}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {tr(c.descKey, c.descFallback)}
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {c.points.map((p) => (
                  <li key={p.key} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                    <span>{tr(p.key, p.fallback)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                  {tr("services.cardCta", "Ver más")}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-[1.6fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2E2F84]">
                {tr("services.previewHighlightLabel", "Enfoque de trabajo")}
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-foreground">
                {tr("services.previewHighlightTitle", "Práctico, medible y cercano")}
              </h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                {tr(
                  "services.previewHighlightDesc",
                  "No vendemos humo: bajamos la estrategia a acciones concretas, con seguimiento y métricas para ver mejoras reales.",
                )}
              </p>
            </div>

            <div className="md:text-right">
              <a
                href="/servicios"
                className="
                  inline-flex items-center justify-center gap-2 rounded-xl
                  border border-border bg-background px-5 py-3
                  text-sm font-medium text-foreground
                  shadow-sm transition hover:shadow
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                "
              >
                {tr("services.previewButton", "Ver todos los servicios")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
