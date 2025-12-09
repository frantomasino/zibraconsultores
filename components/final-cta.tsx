"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

export function FinalCTA() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()

  const handleContactClick = () => {
    // Si estoy en el home, scrolleo al formulario
    if (pathname === "/") {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }

    // Si NO estoy en el home o no encontré la sección, voy a /contacto
    router.push("/contacto")
  }

  const handleLearnMore = () => {
    const faqSection = document.getElementById("faq")
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="bg-accent py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-accent-foreground mb-6 text-balance">
            {t("cta.title")}
          </h2>

          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent text-base"
            >
              {t("cta.button.primary")}
            </Button>

            <Button
              onClick={handleLearnMore}
              size="lg"
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
            >
              {t("cta.button.secondary")}
            </Button>
          </div>

          <p className="text-sm text-accent-foreground/80 mt-8">
            {t("cta.note")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
