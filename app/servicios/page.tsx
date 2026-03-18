import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conocé los servicios de Zibra Consultores en estrategia, gestión, procesos, finanzas, liderazgo y desarrollo de equipos.",
}

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Services />
      <Footer />
    </main>
  )
}