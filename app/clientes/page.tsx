import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Clients } from "@/components/clients"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Clientes",
  description:
    "Conocé la experiencia de Zibra Consultores y los casos de trabajo junto a empresas y organizaciones.",
}

export default function ClientesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Clients />
      <Footer />
    </main>
  )
}