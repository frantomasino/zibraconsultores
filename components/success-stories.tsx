"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

type Story = {
  iconSrc: string
  iconAlt: string
  metricKey: string
  titleKey: string
  descKey: string
}

export function SuccessStories() {
  const { t } = useLanguage()

  const stories: Story[] = [
    {
      iconSrc: "/icons/success/revenue.webp",
      iconAlt: "Crecimiento en Ingresos",
      metricKey: "successStories.story1.metric",
      titleKey: "successStories.story1.title",
      descKey: "successStories.story1.desc",
    },
    {
      iconSrc: "/icons/success/team.webp",
      iconAlt: "Equipos Capacitados",
      metricKey: "successStories.story2.metric",
      titleKey: "successStories.story2.title",
      descKey: "successStories.story2.desc",
    },
    {
      iconSrc: "/icons/success/costs.webp",
      iconAlt: "Reducción de Costos",
      metricKey: "successStories.story3.metric",
      titleKey: "successStories.story3.title",
      descKey: "successStories.story3.desc",
    },
    {
      iconSrc: "/icons/success/goals.webp",
      iconAlt: "Logro de Objetivos",
      metricKey: "successStories.story4.metric",
      titleKey: "successStories.story4.title",
      descKey: "successStories.story4.desc",
    },
  ]

  return (
    <section id="success-stories" className="bg-background pt-8 pb-6 md:pt-10 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER CON ANIMACIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12 max-w-3xl mx-auto"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            {t("successStories.badge")}
          </p>

          <h2 className="text-4xl md:text-5xl text-foreground mt-4">
            {t("successStories.title")}
          </h2>

          <p className="text-muted-foreground mt-4 text-lg">
            {t("successStories.subtitle")}
          </p>
        </motion.div>

        {/* CARDS CON ICONO + ANIMACIÓN */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, index) => {
            return (
              <motion.div
                key={story.titleKey}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-accent/60 transition-all"
              >
                {/* ✅ wrapper igual que antes */}
                <div className="bg-[#2E2F84]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <img
                    src={story.iconSrc}
                    alt={story.iconAlt}
                    className="block h-8 w-8 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="text-3xl font-bold text-[#2E2F84] mb-3">
                  {t(story.metricKey)}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(story.titleKey)}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(story.descKey)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
