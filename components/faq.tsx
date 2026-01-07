"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FAQ() {
  const { t } = useLanguage()

  const faqs = [
    { qKey: "faq1.q", aKey: "faq1.a" },
    { qKey: "faq2.q", aKey: "faq2.a" },
    { qKey: "faq3.q", aKey: "faq3.a" },
    { qKey: "faq4.q", aKey: "faq4.a" },
    { qKey: "faq5.q", aKey: "faq5.a" },
    { qKey: "faq6.q", aKey: "faq6.a" },
  ]

  return (
    <section id="faq" className="bg-background pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">{t("faq.badge")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">{t("faq.title")}</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {t(faq.qKey)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t(faq.aKey)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
