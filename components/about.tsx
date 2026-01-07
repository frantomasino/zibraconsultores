"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Target, Award } from "lucide-react"
import type { ComponentType } from "react"
import { useEffect, useRef, useState } from "react"

export function About() {
  const { t } = useLanguage()

  // refs para animar por secciones
  const headerRef = useRef<HTMLDivElement | null>(null)
  const companyRef = useRef<HTMLDivElement | null>(null)
  const valuesRef = useRef<HTMLDivElement | null>(null)
  const teamRef = useRef<HTMLDivElement | null>(null)

  // visibles
  const [headerVisible, setHeaderVisible] = useState(false)
  const [companyVisible, setCompanyVisible] = useState(false)
  const [valuesVisible, setValuesVisible] = useState(false)
  const [teamVisible, setTeamVisible] = useState(false)

  useEffect(() => {
    const refs: Array<[React.RefObject<HTMLDivElement>, (v: boolean) => void]> = [
      [{ current: headerRef.current } as any, setHeaderVisible],
      [{ current: companyRef.current } as any, setCompanyVisible],
      [{ current: valuesRef.current } as any, setValuesVisible],
      [{ current: teamRef.current } as any, setTeamVisible],
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          if (entry.target === headerRef.current) setHeaderVisible(true)
          if (entry.target === companyRef.current) setCompanyVisible(true)
          if (entry.target === valuesRef.current) setValuesVisible(true)
          if (entry.target === teamRef.current) setTeamVisible(true)

          // se anima una vez y listo
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15 },
    )

    ;[headerRef, companyRef, valuesRef, teamRef].forEach((r) => {
      if (r.current) observer.observe(r.current)
    })

    return () => observer.disconnect()
  }, [])

  const team: Array<{
    name: string
    title: string
    expertise: string
    icon: ComponentType<{ className?: string }>
  }> = [
    {
      name: t("about.team.member1.name"),
      title: t("about.team.member1.title"),
      expertise: t("about.team.member1.expertise"),
      icon: Briefcase,
    },
    {
      name: t("about.team.member2.name"),
      title: t("about.team.member2.title"),
      expertise: t("about.team.member2.expertise"),
      icon: Target,
    },
    {
      name: t("about.team.member3.name"),
      title: t("about.team.member3.title"),
      expertise: t("about.team.member3.expertise"),
      icon: Award,
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

        {/* Company Info */}
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

        {/* Values/Certifications */}
        <div
          ref={valuesRef}
          className={`mb-16 transition-all duration-700 ${
            valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            {t("about.badge")}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Team */}
        <div
          ref={teamRef}
          className={`transition-all duration-700 ${
            teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4">
            {t("hero.badge")}
          </h3>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("about.intro")}
          </p>

          <Tabs defaultValue="member-0" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {team.map((member, index) => (
                <TabsTrigger key={index} value={`member-${index}`} className="text-sm md:text-base">
                  {member.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {team.map((member, index) => {
              const Icon = member.icon
              return (
                <TabsContent key={index} value={`member-${index}`}>
                  <Card className="border-2">
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon className="w-10 h-10 text-accent" />
                        </div>
                      </div>

                      <Badge variant="default" className="mx-auto mb-3 text-lg px-6 py-2">
                        {member.name}
                      </Badge>

                      <CardTitle className="text-2xl font-semibold">{member.title}</CardTitle>
                    </CardHeader>

                    <Separator />

                    <CardContent className="pt-8">
                      <div className="space-y-4">
                        {member.expertise.split("\n").map((item, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
