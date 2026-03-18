import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a Zibra Consultores para recibir asesoramiento en estrategia, operaciones, finanzas, liderazgo y desarrollo organizacional.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Contact />
      <Footer />
    </main>
  )
}