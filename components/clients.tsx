"use client"

import type React from "react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

export function Clients() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  // Estado para arrastrar
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const cases = [
    {
      company: t("clients.case1.company"),
      industry: t("clients.case1.industry"),
      result: t("clients.case1.result"),
      testimonial: t("clients.case1.testimonial"),
    },
    {
      company: t("clients.case2.company"),
      industry: t("clients.case2.industry"),
      result: t("clients.case2.result"),
      testimonial: t("clients.case2.testimonial"),
    },
    {
      company: t("clients.case3.company"),
      industry: t("clients.case3.industry"),
      result: t("clients.case3.result"),
      testimonial: t("clients.case3.testimonial"),
    },
  ]

  // BOTONES IZQ / DER
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = direction === "left" ? -450 : 450
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  // --- DRAG PARA PC/MOBILE ---
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const stopDragging = () => {
    setIsDragging(false)
  }

  return (
    <section id="clientes" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* TÍTULO CON ANIMACIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {t("clients.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("clients.subtitle")}
          </p>
        </motion.div>

        {/* CARRUSEL */}
        <div className="relative select-none">

          {/* IZQUIERDA */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-md
                       rounded-full p-2 border border-border hover:bg-accent/10 transition"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* TARJETAS + DESLIZABLE */}
          <div
            ref={scrollRef}
            className={`
              flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10
              ${isDragging ? "cursor-grabbing" : "cursor-grab"}
            `}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
          >
            {cases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex-shrink-0 w-[330px] md:w-[380px] lg:w-[420px]"
              >
                <Card
                  className="h-full border-border hover:border-accent transition-colors shadow-sm hover:shadow-md"
                >
                  <CardContent className="p-8">

                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>

                    <h3 className="text-xl font-semibold">{c.company}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{c.industry}</p>

                    <div className="bg-accent/5 rounded-lg p-4 mb-6">
                      <p className="text-sm font-semibold text-accent">{c.result}</p>
                    </div>

                    <div>
                      <Quote className="w-6 h-6 text-accent/20 mb-2" />
                      <p className="text-sm text-muted-foreground italic">
                        "{c.testimonial}"
                      </p>
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* DERECHA */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-md 
                       rounded-full p-2 border border-border hover:bg-accent/10 transition"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

        </div>
      </div>
    </section>
  )
}
