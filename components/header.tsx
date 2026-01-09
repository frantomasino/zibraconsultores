"use client"

import type React from "react"
import { useLanguage } from "@/lib/language-context"
import { Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { TooltipProvider } from "@/components/ui/tooltip"

const LOGO_SRC = "/logo-zibra.webp"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* contenedor RELATIVE para poder centrar NAV con absolute */}
        <div className="relative flex items-center justify-between py-4">
          {/* LOGO (grande en altura, ancho controlado para no empujar) */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="flex items-center hover:opacity-90 transition-opacity flex-none"
          >
            <div className="relative h-16 w-[260px] sm:h-20 sm:w-[320px] md:h-20 md:w-[360px] lg:h-24 lg:w-[420px]">
              <Image
                src={LOGO_SRC}
                alt="Zibra Consultora"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* NAV CENTRADO FIJO (NO SE MUEVE aunque el logo cambie) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-10 lg:space-x-14">
              <div className="relative">
                <Link
                  href="/"
                  onClick={handleHomeClick}
                  className={`text-sm font-medium transition-colors ${
                    isActive("/") ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {t("nav.home")}
                </Link>
                {isActive("/") && (
                  <span className="absolute left-1/2 -translate-x-1/2 top-[24px] w-2 h-2 bg-primary rounded-full" />
                )}
              </div>

              <div className="relative">
                <Link
                  href="/servicios"
                  className={`text-sm font-medium transition-colors ${
                    isActive("/servicios") ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {t("nav.services")}
                </Link>
                {isActive("/servicios") && (
                  <span className="absolute left-1/2 -translate-x-1/2 top-[24px] w-2 h-2 bg-primary rounded-full" />
                )}
              </div>

              <div className="relative">
                <Link
                  href="/clientes"
                  className={`text-sm font-medium transition-colors ${
                    isActive("/clientes") ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {t("nav.clients")}
                </Link>
                {isActive("/clientes") && (
                  <span className="absolute left-1/2 -translate-x-1/2 top-[24px] w-2 h-2 bg-primary rounded-full" />
                )}
              </div>

              <div className="relative">
                <Link
                  href="/nosotros"
                  className={`text-sm font-medium transition-colors ${
                    isActive("/nosotros") ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {t("nav.about")}
                </Link>
                {isActive("/nosotros") && (
                  <span className="absolute left-1/2 -translate-x-1/2 top-[24px] w-2 h-2 bg-primary rounded-full" />
                )}
              </div>

              <div className="relative">
                <Link
                  href="/contacto"
                  className={`text-sm font-medium transition-colors ${
                    isActive("/contacto") ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {t("nav.contact")}
                </Link>
                {isActive("/contacto") && (
                  <span className="absolute left-1/2 -translate-x-1/2 top-[24px] w-2 h-2 bg-primary rounded-full" />
                )}
              </div>
            </div>
          </div>

          {/* IDIOMA (derecha fija) */}
          <TooltipProvider>
            <div className="flex items-center gap-3 flex-none">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors border border-border rounded-md hover:bg-muted/60 font-medium bg-background"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">{language === "en" ? "English" : "Español"}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="min-w-[8rem]">
                  <DropdownMenuItem
                    onClick={() => setLanguage("es")}
                    className={language === "es" ? "font-semibold" : ""}
                  >
                    Español
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className={language === "en" ? "font-semibold" : ""}
                  >
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </header>
  )
}
