import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clients } from "@/components/clients"

export default function ClientesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Clients />
      <Footer />
    </main>
  )
}
