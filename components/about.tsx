"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function About() {
  const { t } = useLanguage()

  const team = [
    {
      name: t("about.team.member1.name"),
      title: t("about.team.member1.title"),
      expertise: t("about.team.member1.expertise"),
      image: "", /* IMAGEN */
    },
    {
      name: t("about.team.member2.name"),
      title: t("about.team.member2.title"),
      expertise: t("about.team.member2.expertise"),
      image: "", /* IMAGEN */
    },
    {
      name: t("about.team.member3.name"),
      title: t("about.team.member3.title"),
      expertise: t("about.team.member3.expertise"),
      image: "", /* IMAGEN */
    },
  ]

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITULO + INTRO CON ANIMACIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("about.intro")}
          </p>
        </motion.div>

        {/* TEAM GRID CON ANIMACIÓN POR TARJETA */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* FOTO */}
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                />
              </div>

              {/* NOMBRE */}
              <div className="bg-accent text-accent-foreground px-6 py-3 mb-4 w-full rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{member.name}</h3>
              </div>

              {/* TÍTULO */}
              <p className="font-semibold text-foreground mb-4">
                {member.title}
              </p>

              {/* EXPERTISE */}
              <div className="text-left space-y-2 text-sm text-muted-foreground">
                {member.expertise.split("\n").map((item, i) => (
                  <p key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
