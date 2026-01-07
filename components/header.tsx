"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
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

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"

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
      {/* ↑ le subí un poco la altura: py-4 -> py-5 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
  <div className="h-14 w-[260px] md:h-16 md:w-[300px] overflow-hidden">
    <Image
      src="/Logo-Zibra.png"
      alt="Zibra Consultora"
      width={600}
      height={160}
      priority
      className="h-full w-full object-cover object-left"
    />
  </div>

</Link>


        {/* NAV CENTRADO */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-10 lg:space-x-14">
            {/* INICIO */}
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

            {/* SERVICIOS */}
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

            {/* CLIENTES */}
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

            {/* NOSOTROS */}
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

            {/* CONTACTO */}
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

        {/* IDIOMA + BOTÓN */}
        <TooltipProvider>
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors border border-border rounded-md hover:bg-muted/60 font-medium bg-background">
                  <Globe className="w-4 h-4" />
                  <span>{language === "en" ? "English" : "Español"}</span>
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

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/contacto">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all">
                    {t("cta.contact")}
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Agendá una consulta con nuestro equipo</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </header>
  )
}
