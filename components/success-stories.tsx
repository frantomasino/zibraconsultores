"use client"

import Image from "next/image"
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
      iconAlt: "Icono de crecimiento en ingresos",
      metricKey: "successStories.story1.metric",
      titleKey: "successStories.story1.title",
      descKey: "successStories.story1.desc",
    },
    {
      iconSrc: "/icons/success/team.webp",
      iconAlt: "Icono de equipos capacitados",
      metricKey: "successStories.story2.metric",
      titleKey: "successStories.story2.title",
      descKey: "successStories.story2.desc",
    },
    {
      iconSrc: "/icons/success/costs.webp",
      iconAlt: "Icono de reducción de costos",
      metricKey: "successStories.story3.metric",
      titleKey: "successStories.story3.title",
      descKey: "successStories.story3.desc",
    },
    {
      iconSrc: "/icons/success/goals.webp",
      iconAlt: "Icono de logro de objetivos",
      metricKey: "successStories.story4.metric",
      titleKey: "successStories.story4.title",
      descKey: "successStories.story4.desc",
    },
  ]

  return (
    <section id="success-stories" className="bg-background pb-6 pt-8 md:pb-10 md:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {t("successStories.badge")}
          </p>

          <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
            {t("successStories.title")}
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            {t("successStories.subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stories.map((story, index) => {
            return (
              <motion.div
                key={story.titleKey}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/60 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#2E2F84]/10">
                  <Image
                    src={story.iconSrc}
                    alt={story.iconAlt}
                    width={32}
                    height={32}
                    className="block h-8 w-8 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="mb-3 text-3xl font-bold text-[#2E2F84]">
                  {t(story.metricKey)}
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {t(story.titleKey)}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
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