"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">ZC</span>
          </div>
          <span className="font-bold text-gray-800 text-lg tracking-tight font-serif">
            Zibra Consultora
          </span>
        </Link>

        {/* NAV centrado al estilo Lambda */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-10 lg:space-x-14">
            <Link href="/" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">
              {t("nav.home")}
            </Link>
            <Link href="/servicios" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">
              {t("nav.services")}
            </Link>
            <Link href="/clientes" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">
              {t("nav.clients")}
            </Link>
            <Link href="/nosotros" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">
              {t("nav.about")}
            </Link>
            <Link href="/contacto" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">
              {t("nav.contact")}
            </Link>
          </div>
        </div>

        {/* IDIOMA + BOTÓN */}
        <div className="flex items-center gap-3">

          {/* Selector de idioma */}
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors border border-gray-300 rounded-md hover:bg-gray-50 font-medium"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "English" : "Español"}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-xl z-50">
                <button
                  onClick={() => {
                    setLanguage("es")
                    setLanguageOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors font-medium text-gray-700"
                >
                  Español
                </button>
                <button
                  onClick={() => {
                    setLanguage("en")
                    setLanguageOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors font-medium text-gray-700"
                >
                  English
                </button>
              </div>
            )}
          </div>

          {/* Botón de contacto */}
          <Link href="/contacto">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-md hover:shadow-lg transition-all">
              {t("cta.contact")}
            </Button>
          </Link>
        </div>

      </div>
    </header>
  )
}
