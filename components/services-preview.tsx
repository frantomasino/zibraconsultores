"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useMemo } from "react"

type ServiceCard = {
  key: string
  iconSrc: string
  iconAlt: string
  titleKey: string
  descKey: string
  titleFallback: string
  descFallback: string
  href: string
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
        iconSrc: "/icons/services/strategy.webp",
        iconAlt: "Icono de planificación estratégica",
        titleKey: "services.strategy.title",
        descKey: "services.strategy.desc",
        titleFallback: "Planificación Estratégica",
        descFallback: "Hojas de ruta claras y estrategias accionables para el largo plazo.",
        href: "/servicios#strategy",
      },
      {
        key: "operations",
        iconSrc: "/icons/services/operations.webp",
        iconAlt: "Icono de optimización de operaciones",
        titleKey: "services.operations.title",
        descKey: "services.operations.desc",
        titleFallback: "Optimización de Operaciones",
        descFallback: "Procesos más eficientes, menos fricción y mayor control operativo.",
        href: "/servicios#operations",
      },
      {
        key: "financial",
        iconSrc: "/icons/services/finance.webp",
        iconAlt: "Icono de consultoría financiera",
        titleKey: "services.financial.title",
        descKey: "services.financial.desc",
        titleFallback: "Consultoría Financiera",
        descFallback: "Mejor control, análisis y decisiones financieras con datos.",
        href: "/servicios#financial",
      },
      {
        key: "people",
        iconSrc: "/icons/services/hr.webp",
        iconAlt: "Icono de gestión de personas",
        titleKey: "services.people.title",
        descKey: "services.people.desc",
        titleFallback: "Gestión de Personas",
        descFallback: "Estructura, roles y prácticas para equipos alineados y productivos.",
        href: "/servicios#people",
      },
      {
        key: "tech",
        iconSrc: "/icons/services/tech.webp",
        iconAlt: "Icono de tecnología y digital",
        titleKey: "services.tech.title",
        descKey: "services.tech.desc",
        titleFallback: "Tecnología y Digital",
        descFallback: "Ordenamos sistemas y automatizamos para escalar sin caos.",
        href: "/servicios#tech",
      },
      {
        key: "growth",
        iconSrc: "/icons/services/growth.webp",
        iconAlt: "Icono de crecimiento comercial",
        titleKey: "services.growth.title",
        descKey: "services.growth.desc",
        titleFallback: "Crecimiento Comercial",
        descFallback: "Estrategia y ejecución para aumentar ventas de forma sustentable.",
        href: "/servicios#growth",
      },
    ],
    [],
  )

  return (
    <section id="servicios" className="border-t border-border/60 bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-12 md:text-left"
        >
          <p className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            {tr("services.badge", "Servicios clave")}
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            {tr("services.title", "Soluciones para cada etapa de tu negocio")}
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
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
          className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.slice(0, 3).map((c) => (
            <motion.div key={c.key} variants={item} className="h-full">
              <Link
                href={c.href}
                className="
                  group relative flex h-full flex-col overflow-hidden rounded-2xl
                  border border-border bg-card p-6 md:p-7
                  transition-all duration-500
                  hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg
                  focus-within:outline-none focus-within:ring-2 focus-within:ring-accent/60 focus-within:ring-offset-2 focus-within:ring-offset-background
                "
                aria-label={tr(c.titleKey, c.titleFallback)}
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at 30% 20%, rgba(255,255,255,0.08), transparent 40%)",
                  }}
                />

                <div className="flex items-start gap-4">
                  <div
                    className="
                      grid h-14 w-14 place-items-center rounded-xl
                      border border-border bg-background
                      transition-transform duration-300 group-hover:scale-[1.03]
                    "
                  >
                    <div className="grid h-14 w-14 place-items-center rounded-full border border-border bg-background">
                      <Image
                        src={c.iconSrc}
                        alt={c.iconAlt}
                        width={40}
                        height={40}
                        className="block h-10 w-10 object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug text-foreground md:text-xl">
                      {tr(c.titleKey, c.titleFallback)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {tr(c.descKey, c.descFallback)}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-[1.6fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2E2F84]">
                {tr("services.previewHighlightLabel", "Enfoque de trabajo")}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                {tr("services.previewHighlightTitle", "Práctico, medible y cercano")}
              </h3>
               
            </div>

            <div className="md:text-right">
              <Link
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
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}