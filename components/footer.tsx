"use client"

import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* LOGO + DESCRIPCIÓN */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">ZC</span>
              </div>
              <span className="font-bold text-lg">Zibra Consultora</span>
            </div>
            <p className="text-sm text-background/70 mb-4">
              {t("footer.tagline")}
            </p>
            <Badge className="bg-accent/20 text-background border-accent/30">
              {t("footer.certified")}
            </Badge>
          </div>

          {/* ENLACES RÁPIDOS */}
          <div>
            <h4 className="font-semibold mb-4 text-base">{t("footer.links")}</h4>
            <Separator className="bg-background/20 mb-4" />
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a
                  href="/servicios"
                  className="hover:text-background transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="/nosotros"
                  className="hover:text-background transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="hover:text-background transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  {t("nav.contact")}
                </a>
              </li>
              <li>
                <a
                  href="/clientes"
                  className="hover:text-background transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  {t("nav.testimonials")}
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="font-semibold mb-4 text-base">{t("footer.contact")}</h4>
            <Separator className="bg-background/20 mb-4" />
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+541112345678" className="hover:text-background transition">
                  +54 11 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:info@gmail.com"
                  className="hover:text-background transition"
                >
                  info@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

          {/* REDES */}
          <div>
            <h4 className="font-semibold mb-4 text-base">{t("footer.connect")}</h4>
            <Separator className="bg-background/20 mb-4" />
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a
                  href="#"
                  className="hover:text-background transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-background transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-background transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-background/70">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
