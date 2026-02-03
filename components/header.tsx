"use client"

import type React from "react"
import { useLanguage } from "@/lib/language-context"
import { Globe, ChevronDown, Menu } from "lucide-react"
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
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

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

  const navItems = [
    { href: "/", label: t("nav.home"), onClick: handleHomeClick },
    { href: "/servicios", label: t("nav.services") },
    { href: "/clientes", label: t("nav.clients") },
    { href: "/nosotros", label: t("nav.about") },
    { href: "/contacto", label: t("nav.contact") },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between py-3 md:py-4">
          {/* LOGO */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="flex items-center hover:opacity-90 transition-opacity flex-none"
          >
            {/* CHICO EN MOBILE - GRANDE EN DESKTOP */}
            <div className="relative h-10 w-[170px] sm:h-12 sm:w-[210px] md:h-16 md:w-[320px] lg:h-20 lg:w-[380px]">
              <Image
                src={LOGO_SRC}
                alt="Zibra Consultora"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* NAV CENTRADO (DESKTOP) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-10 lg:space-x-14">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    onClick={item.onClick}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isActive(item.href) && (
                    <span className="absolute left-1/2 -translate-x-1/2 top-[24px] w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* DERECHA */}
          <TooltipProvider>
            <div className="flex items-center gap-2 md:gap-3 flex-none">
              {/* IDIOMA */}
              <DropdownMenu>
                {/* ✅ UN SOLO TRIGGER (renderiza mobile o desktop dentro) */}
                <DropdownMenuTrigger asChild>
                  <button type="button" className="group" aria-label="Cambiar idioma">
                    {/* MOBILE: botón redondo */}
                    <span className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted/60 transition-colors">
                      <Globe className="w-5 h-5" />
                    </span>

                    {/* DESKTOP: botón con texto */}
                    <span className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors border border-border rounded-md hover:bg-muted/60 font-medium bg-background">
                      <Globe className="w-4 h-4" />
                      <span>{language === "en" ? "English" : "Español"}</span>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="bottom"
                  align="end"
                  sideOffset={8}
                  collisionPadding={12}
                  className="z-50 min-w-[9.5rem]"
                >
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

              {/* HAMBURGUESA - SOLO MOBILE */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent side="right" className="w-[85vw] sm:w-[380px]">
                    <SheetHeader>
                      <SheetTitle>Menú</SheetTitle>
                    </SheetHeader>

                    <nav className="mt-6 flex flex-col gap-3">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={item.onClick}
                          className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                            isActive(item.href) ? "bg-muted text-primary" : "hover:bg-muted"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </header>
  )
}
