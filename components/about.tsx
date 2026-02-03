"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useEffect, useRef, useState } from "react"

export function About() {
  const { t } = useLanguage()

  // refs para animar por secciones
  const headerRef = useRef<HTMLDivElement | null>(null)
  const companyRef = useRef<HTMLDivElement | null>(null)
  const trajectoriesRef = useRef<HTMLDivElement | null>(null)
  const valuesRef = useRef<HTMLDivElement | null>(null)

  // visibles
  const [headerVisible, setHeaderVisible] = useState(false)
  const [companyVisible, setCompanyVisible] = useState(false)
  const [trajectoriesVisible, setTrajectoriesVisible] = useState(false)
  const [valuesVisible, setValuesVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          if (entry.target === headerRef.current) setHeaderVisible(true)
          if (entry.target === companyRef.current) setCompanyVisible(true)
          if (entry.target === trajectoriesRef.current) setTrajectoriesVisible(true)
          if (entry.target === valuesRef.current) setValuesVisible(true)

          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15 },
    )

    ;[headerRef, companyRef, trajectoriesRef, valuesRef].forEach((r) => {
      if (r.current) observer.observe(r.current)
    })

    return () => observer.disconnect()
  }, [])

  const trajectories = [
    {
      name: t("about.trajectories.natalia.name"),
      title: t("about.trajectories.natalia.title"),
      points: [
        t("about.trajectories.natalia.p1"),
        t("about.trajectories.natalia.p2"),
        t("about.trajectories.natalia.p3"),
      ].filter(Boolean),
    },
    {
      name: t("about.trajectories.mariel.name"),
      title: t("about.trajectories.mariel.title"),
      points: [
        t("about.trajectories.mariel.p1"),
        t("about.trajectories.mariel.p2"),
      ].filter(Boolean),
    },
    {
      name: t("about.trajectories.fernando.name"),
      title: t("about.trajectories.fernando.title"),
      points: [
        t("about.trajectories.fernando.p1"),
        t("about.trajectories.fernando.p2"),
      ].filter(Boolean),
    },
  ]

  const values = [
    { title: t("about.cert1.title"), description: t("about.cert1.desc") },
    { title: t("about.cert2.title"), description: t("about.cert2.desc") },
    { title: t("about.cert3.title"), description: t("about.cert3.desc") },
  ]

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="mb-4 text-base px-4 py-2">
            {t("about.badge")}
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            {t("about.title")}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("about.intro")}
          </p>
        </div>

        {/* Company Info (DEJAR ESTO COMO ESTÁ) */}
        <div
          ref={companyRef}
          className={`mb-16 grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            companyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">{t("about.p1")}</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">{t("about.p2")}</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16" />

        {/* Trayectorias (3 en línea) */}
        <div
          ref={trajectoriesRef}
          className={`mb-16 transition-all duration-700 ${
            trajectoriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            {t("about.trajectories.title")}
          </h3>

          <div className="grid gap-6 lg:grid-cols-3">
            {trajectories.map((p) => (
              <Card key={p.name} className="border-2 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-[#2E2F84]">
                    {p.name}
                  </CardTitle>
                  <p className="text-muted-foreground">{p.title}</p>
                </CardHeader>

                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {p.points.map((txt, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#2E2F84] flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{txt}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Values/Certifications */}
        <div
          ref={valuesRef}
          className={`transition-all duration-700 ${
            valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            {t("about.values.title")}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all border-2">
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <p className="text-base text-muted-foreground">{value.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
