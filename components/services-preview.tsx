"use client"

import { useLanguage } from "@/lib/language-context"
import { TrendingUp, Settings, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesPreview() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
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
  ]

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">{t("services.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("services.mainTitle")} <span className="text-accent">{t("services.mainTitleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all hover:border-accent/50"
            >
              <div className="text-accent mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground">{t(service.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/servicios">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {t("services.viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
