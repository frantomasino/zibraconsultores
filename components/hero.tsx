"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const { t } = useLanguage()
  const router = useRouter()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              {t("hero.title")}
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button
                onClick={() => router.push("/contacto")}
                size="lg"
                className="bg-accent text-base font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
              >
                {t("hero.cta.primary")}
              </Button>

              <Button
                onClick={() => router.push("/servicios")}
                size="lg"
                className="group bg-primary font-semibold text-primary-foreground shadow-md hover:bg-primary/90"
              >
                {t("hero.cta.secondary")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
            <Image
              src="/hero.team.webp"
              alt="Equipo de consultoría empresarial trabajando en estrategia y crecimiento"
              fill
              priority
              className="rounded-3xl object-cover shadow-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}