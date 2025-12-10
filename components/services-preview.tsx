"use client"

import { useLanguage } from "@/lib/language-context"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Target, Settings, DollarSign, Users } from "lucide-react"
import { motion } from "framer-motion"

export function ServicesPreview() {
  const { t } = useLanguage()

  const tabs = [
    {
      value: "strategy",
      icon: Target,
      titleKey: "services.strategy.title",
      descKey: "services.strategy.desc",
    },
    {
      value: "operations",
      icon: Settings,
      titleKey: "services.operations.title",
      descKey: "services.operations.desc",
    },
    {
      value: "financial",
      icon: DollarSign,
      titleKey: "services.financial.title",
      descKey: "services.financial.desc",
    },
    {
      value: "people",
      icon: Users,
      titleKey: "services.people.title",
      descKey: "services.people.desc",
    },
  ]

  return (
    <section
      id="servicios"
      className="bg-background py-20 md:py-28 border-t border-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <p className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            {t("services.badge") ?? "Servicios clave"}
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            {t("services.title") ?? "Soluciones para cada etapa de tu negocio"}
          </h2>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
            {t("services.subtitle") ??
              "Acompañamos a tu empresa en estrategia, operación, finanzas y gestión de personas con un enfoque práctico y medible."}
          </p>
        </motion.div>

        {/* TABS */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm"
        >
          <Tabs defaultValue="strategy" className="space-y-8">
            {/* LISTA DE TABS */}
            <TabsList className="w-full justify-start overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm md:text-base"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="h-4 w-4 text-accent" />
                    </span>
                    <span>{t(tab.titleKey)}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {/* CONTENIDO DE CADA TAB */}
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
                    {/* TEXTO PRINCIPAL */}
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        <Icon className="h-4 w-4" />
                        <span>{t(tab.titleKey)}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                        {t(tab.titleKey)}
                      </h3>

                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {t(tab.descKey)}
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>
                            {t(`services.${tab.value}.point1`) ||
                              "Diagnóstico inicial y definición de objetivos claros y alcanzables."}
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>
                            {t(`services.${tab.value}.point2`) ||
                              "Plan de acción práctico, alineado con la realidad operativa de tu empresa."}
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>
                            {t(`services.${tab.value}.point3`) ||
                              "Seguimiento de indicadores y ajustes continuos para asegurar resultados."}
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* BLOQUE RESUMEN / HIGHLIGHT */}
                    <div className="rounded-xl border border-dashed border-accent/40 bg-accent/5 p-6 space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                        {t("services.highlight") ?? "Qué podés esperar"}
                      </p>
                      <p className="text-sm md:text-base text-foreground leading-relaxed">
                        {t(`services.${tab.value}.highlight`) ||
                          "Trabajamos con un enfoque cercano y orientado a resultados concretos, para que las decisiones estratégicas se traduzcan en mejoras visibles en el día a día de tu negocio."}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
