"use client"

import { useLanguage } from "@/lib/language-context"
import { TrendingUp, Settings, DollarSign, Users, Cpu, Target } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function Services() {
  const { t } = useLanguage()
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const tr = (key: string, fallback: string) => {
    const value = t(key)
    return value === key ? fallback : value
  }

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      titleKey: "services.strategy.title",
      descKey: "services.strategy.desc",
      titleFallback: "Planificación Estratégica",
      descFallback: "Definimos una hoja de ruta clara para crecer con foco y orden.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      titleKey: "services.operations.title",
      descKey: "services.operations.desc",
      titleFallback: "Optimización de Operaciones",
      descFallback: "Mejoramos procesos y eficiencia para reducir costos y tiempos.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      titleKey: "services.financial.title",
      descKey: "services.financial.desc",
      titleFallback: "Consultoría Financiera",
      descFallback: "Análisis y control financiero para decisiones más seguras.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: "services.hr.title",
      descKey: "services.hr.desc",
      titleFallback: "Gestión de Personas",
      descFallback: "Estructura, roles, cultura y herramientas para equipos sólidos.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      titleKey: "services.tech.title",
      descKey: "services.tech.desc",
      titleFallback: "Tecnología y Digital",
      descFallback: "Ordenamos sistemas y automatizamos para escalar sin caos.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      titleKey: "services.growth.title",
      descKey: "services.growth.desc",
      titleFallback: "Crecimiento Comercial",
      descFallback: "Estrategia y ejecución para aumentar ventas de forma sustentable.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="services" className="bg-background py-20 md:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl text-foreground mb-4">
              {tr("services.mainTitle", "Servicios")}{" "}
              <span className="text-[#2E2F84]">{tr("services.mainTitleHighlight", "clave")}</span>
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {tr(
              "services.title",
              "Servicios de consultoría personalizados diseñados para satisfacer tus necesidades empresariales únicas.",
            )}
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
              {/* ICONO EN AZUL */}
              <div className="text-[#2E2F84] mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {tr(service.titleKey, service.titleFallback)}
              </h3>
              <p className="text-muted-foreground">{tr(service.descKey, service.descFallback)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
