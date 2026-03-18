import type { Metadata } from "next"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé a Zibra Consultores, nuestra visión de trabajo y cómo acompañamos a empresas y organizaciones en sus procesos de crecimiento.",
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <About />
      <Footer />
    </main>
  )
}