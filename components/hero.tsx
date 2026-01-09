"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const { t } = useLanguage()

  const handleContactClick = () => {
    window.location.href = "/contacto"
  }

  const handleLearnMore = () => {
    window.location.href = "/servicios"
  }

  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              {t("hero.title")}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                onClick={handleContactClick}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {t("hero.cta.primary")}
              </Button>

              <Button
                onClick={handleLearnMore}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md group"
              >
                {t("hero.cta.secondary")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[360px] sm:h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-3xl" />
            <img
              src="/professional-business-consulting-team-meeting.jpg"
              alt="Business Consulting Team"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
