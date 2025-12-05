"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-4 md:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-4 gap-6 mb-6">

          {/* LOGO + DESCRIPCIÓN */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">ZC</span>
              </div>
              <span className="font-semibold">Zibra Consultora</span>
            </div>
            <p className="text-sm text-background/70">
              {t("footer.tagline")}
            </p>
          </div>

          {/* ENLACES RÁPIDOS */}
          <div>
            <h4 className="font-semibold mb-3">{t("footer.links")}</h4>
            <ul className="space-y-1 text-sm text-background/70">
              <li><a href="/servicios" className="hover:text-background transition">{t("nav.services")}</a></li>
              <li><a href="/nosotros" className="hover:text-background transition">{t("nav.about")}</a></li>
              <li><a href="/contacto" className="hover:text-background transition">{t("nav.contact")}</a></li>
              <li><a href="/clientes" className="hover:text-background transition">{t("nav.testimonials")}</a></li>
            </ul>
          </div>

          {/* SOPORTE */}
          <div>
            <h4 className="font-semibold mb-3">{t("footer.support")}</h4>
            <ul className="space-y-1 text-sm text-background/70">
              <li><a href="/contacto" className="hover:text-background transition">{t("nav.contact")}</a></li>
              <li><a href="/faq" className="hover:text-background transition">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-background transition">Privacy</a></li>
              <li><a href="/terms" className="hover:text-background transition">Terms</a></li>
            </ul>
          </div>

          {/* REDES */}
          <div>
            <h4 className="font-semibold mb-3">{t("footer.connect")}</h4>
            <ul className="space-y-1 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-background transition">Twitter</a></li>
              <li><a href="#" className="hover:text-background transition">Instagram</a></li>
              <li><a href="mailto:info@gelsoconsulting.com" className="hover:text-background transition">Email</a></li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-background/20 pt-3 text-center text-xs text-background/60">
          <p>{t("footer.copyright")}</p>
        </div>

      </div>
    </footer>
  )
}
