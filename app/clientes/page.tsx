import { Header } from "@/components/header"
import { Clients } from "@/components/clients"
import { Footer } from "@/components/footer"

export default function ClientesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Clients />
      <Footer />
    </main>
  )
}
