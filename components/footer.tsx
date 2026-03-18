"use client"

import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground py-12 text-background md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/icono-zibra-blanco---fondo-transparente.png"
                alt="Logo de Zibra Consultora"
                width={44}
                height={44}
                className="h-10 w-auto md:h-11"
              />
              <span className="text-lg font-bold">Zibra Consultora</span>
            </div>

            <p className="mb-4 text-sm text-background/70">{t("footer.tagline")}</p>

            <Badge className="border-accent/30 bg-accent/20 text-background">
              {t("footer.certified")}
            </Badge>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold">{t("footer.links")}</h4>
            <Separator className="mb-4 bg-background/20" />
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link
                  href="/servicios"
                  className="flex items-center gap-2 transition hover:text-background"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="flex items-center gap-2 transition hover:text-background"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="flex items-center gap-2 transition hover:text-background"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/clientes"
                  className="flex items-center gap-2 transition hover:text-background"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {t("nav.testimonials")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold">{t("footer.contact")}</h4>
            <Separator className="mb-4 bg-background/20" />
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+541112345678" className="transition hover:text-background">
                  +54 11 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@gmail.com" className="transition hover:text-background">
                  info@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold">{t("footer.connect")}</h4>
            <Separator className="mb-4 bg-background/20" />
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#" className="flex items-center gap-2 transition hover:text-background">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zibraconsultores/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-background"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8 bg-background/20" />

        <div className="text-center text-sm text-background/70">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}