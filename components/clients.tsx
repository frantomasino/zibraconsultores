"use client"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Store,
  Scissors,
  GraduationCap,
  Factory,
  TrendingUp,
} from "lucide-react"
import { useEffect, useState } from "react"

type ClientId = "aliwen" | "telasClaudia" | "cea" | "dimayer"

type ClientItem = {
  id: ClientId
  name: string
  subtitle: string
  industry: string
  description: string
  challenge: string
  solution: string
  results: { metric: string; label: string }[]
  icon: typeof Store
}

export function Clients() {
  const { t } = useLanguage()

  const title = t("clients.title")
  const words = title.split(" ")

  const REPLAY_MS = 45_000
  const [titleCycle, setTitleCycle] = useState(0)
  const [expandedId, setExpandedId] = useState<ClientId | null>(null)

  useEffect(() => {
    const id = window.setInterval(() => setTitleCycle((v) => v + 1), REPLAY_MS)
    return () => window.clearInterval(id)
  }, [])

  const TITLE_STAGGER = 0.16
  const WORD_DURATION = 0.8
  const WORD_Y = 16

  const clients: ClientItem[] = [
    {
      id: "aliwen",
      name: t("clients.aliwen.name"),
      subtitle: t("clients.aliwen.industry"),
      industry: t("clients.aliwen.category"),
      description: t("clients.aliwen.description"),
      challenge: t("clients.aliwen.challengeDesc"),
      solution: t("clients.aliwen.solutionDesc"),
      results: [
        { metric: t("clients.aliwen.result1"), label: t("clients.aliwen.result1Label") },
        { metric: t("clients.aliwen.result2"), label: t("clients.aliwen.result2Label") },
        { metric: t("clients.aliwen.result3"), label: t("clients.aliwen.result3Label") },
      ],
      icon: Store,
    },
    {
      id: "telasClaudia",
      name: t("clients.telasClaudia.name"),
      subtitle: t("clients.telasClaudia.industry"),
      industry: t("clients.telasClaudia.category"),
      description: t("clients.telasClaudia.description"),
      challenge: t("clients.telasClaudia.challengeDesc"),
      solution: t("clients.telasClaudia.solutionDesc"),
      results: [
        { metric: t("clients.telasClaudia.result1"), label: t("clients.telasClaudia.result1Label") },
        { metric: t("clients.telasClaudia.result2"), label: t("clients.telasClaudia.result2Label") },
        { metric: t("clients.telasClaudia.result3"), label: t("clients.telasClaudia.result3Label") },
      ],
      icon: Scissors,
    },
    {
      id: "cea",
      name: t("clients.cea.name"),
      subtitle: t("clients.cea.industry"),
      industry: t("clients.cea.category"),
      description: t("clients.cea.description"),
      challenge: t("clients.cea.challengeDesc"),
      solution: t("clients.cea.solutionDesc"),
      results: [
        { metric: t("clients.cea.result1"), label: t("clients.cea.result1Label") },
        { metric: t("clients.cea.result2"), label: t("clients.cea.result2Label") },
        { metric: t("clients.cea.result3"), label: t("clients.cea.result3Label") },
      ],
      icon: GraduationCap,
    },
    {
      id: "dimayer",
      name: t("clients.dimayer.name"),
      subtitle: t("clients.dimayer.industry"),
      industry: t("clients.dimayer.category"),
      description: t("clients.dimayer.description"),
      challenge: t("clients.dimayer.challengeDesc"),
      solution: t("clients.dimayer.solutionDesc"),
      results: [
        { metric: t("clients.dimayer.result1"), label: t("clients.dimayer.result1Label") },
        { metric: t("clients.dimayer.result2"), label: t("clients.dimayer.result2Label") },
        { metric: t("clients.dimayer.result3"), label: t("clients.dimayer.result3Label") },
      ],
      icon: Factory,
    },
  ]

  return (
    <section id="clients" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            {t("clients.badge")}
          </span>

          <motion.h2
            key={`clients-title-${titleCycle}`}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: TITLE_STAGGER,
                  staggerDirection: -1,
                },
              },
            }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            {words.map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                variants={{
                  hidden: { opacity: 0, y: WORD_Y },
                  show: { opacity: 1, y: 0, transition: { duration: WORD_DURATION } },
                }}
                className={["inline-block", i === 0 ? "text-[#2E2F84]" : ""].join(" ")}
              >
                {w}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.95, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t("clients.subtitle")}
          </motion.p>
        </motion.div>

        <div className="flex flex-col items-center mb-10 md:mb-14">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8 md:mb-10"
          >
            <ChevronDown className="w-7 h-7 md:w-8 md:h-8 text-foreground/70" strokeWidth={1.5} />
          </motion.div>

          <div className="w-full flex items-center gap-4 md:gap-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-foreground/80 whitespace-nowrap">
              {t("clients.sectionLabel")}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {clients.map((client) => {
            const Icon = client.icon
            const isExpanded = expandedId === client.id

            return (
              <div
                key={client.id}
                onClick={() => setExpandedId(isExpanded ? null : client.id)}
                className={[
                  "group relative bg-card border border-border rounded-lg p-8 cursor-pointer",
                  "transition-all duration-500 hover:shadow-lg hover:border-foreground/20",
                  isExpanded ? "lg:col-span-2" : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4 min-w-0">
                     <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
  {client.id === "aliwen" ? (
    <Image
      src="/clientes/aliwen.webp"
      alt="Aliwen"
      width={52}
      height={52}
      className="object-contain opacity-80"
    />
  ) : client.id === "cea" ? (
    <Image
      src="/clientes/cursos-cea.webp"
      alt="Cursos Cea"
      width={52}
      height={52}
      className="object-contain opacity-80"
    />
  ) : (
    <Icon className="w-5 h-5 text-foreground/60" />
  )}
</div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-serif font-medium text-foreground break-words">
                        {client.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{client.subtitle}</p>
                    </div>
                  </div>

                  <span className="text-xs tracking-wider uppercase text-muted-foreground bg-secondary px-3 py-1 rounded-full shrink-0">
                    {client.industry}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {client.description}
                </p>

                <div
                  className={[
                    "overflow-hidden transition-all duration-500",
                    isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <div className="border-t border-border pt-6 mb-6">
                    <h4 className="text-sm font-bold text-foreground mb-2">
                      {t("clients.challengeTitle")}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {client.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-foreground mb-2">
                      {t("clients.solutionTitle")}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {client.solution}
                    </p>
                  </div>
                </div>

                <div className={isExpanded ? "border-t border-border pt-6" : "mt-auto border-t border-border pt-6"}>
                  <div className="grid grid-cols-3 gap-4">
                    {client.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1 min-h-[28px]">
                          <TrendingUp className="w-3 h-3 text-accent shrink-0" />
                          <span className="text-lg md:text-xl font-semibold text-foreground">
                            {result.metric}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide min-h-[32px] leading-tight">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex justify-end">
                    <ChevronDown
                      className={[
                        "w-4 h-4 text-muted-foreground transition-transform duration-300",
                        isExpanded ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}