"use client"

import { useLanguage } from "@/lib/language-context"
import { TrendingUp, Settings, DollarSign, Users, Cpu, Target } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function Services() {
  const { t } = useLanguage()
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      titleKey: "services.strategy.title",
      descKey: "services.strategy.desc",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      titleKey: "services.operations.title",
      descKey: "services.operations.desc",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      titleKey: "services.financial.title",
      descKey: "services.financial.desc",
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: "services.hr.title",
      descKey: "services.hr.desc",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      titleKey: "services.tech.title",
      descKey: "services.tech.desc",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      titleKey: "services.growth.title",
      descKey: "services.growth.desc",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 150) // 150ms delay between each card
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="bg-background py-20 md:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <div className="text-center mb-16">
  <div className="inline-block">
    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
      {t("services.mainTitle")}{" "}
      <span className="text-accent">
        {t("services.mainTitleHighlight")}
      </span>
    </h2>
  </div>

  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
    {t("services.title")}
  </p>
</div>




        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-500 hover:border-accent/50 ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-accent mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
