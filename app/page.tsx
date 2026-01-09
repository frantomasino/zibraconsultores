import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/services-preview"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SuccessStories } from "@/components/success-stories"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesPreview />
      <SuccessStories />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
