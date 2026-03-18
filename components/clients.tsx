"use client"

import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Store,
  Scissors,
  GraduationCap,
  Factory,
  TrendingUp,
  BarChart3,
  CheckCircle2,
} from "lucide-react"
import { useEffect, useState } from "react"

type ClientId = "aliwen" | "telasClaudia" | "cea" | "dimayer"

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

  const clients: Array<{
    id: ClientId
    name: string
    subtitle: string
    category: string
    description: string
    challenge: string
    solution: string
    results: { value: string; label: string; icon: typeof TrendingUp }[]
    icon: typeof Store
  }> = [
    {
      id: "aliwen",
      name: t("clients.aliwen.name"),
      subtitle: t("clients.aliwen.industry"),
      category: t("clients.aliwen.category"),
      description: t("clients.aliwen.description"),
      challenge: t("clients.aliwen.challengeDesc"),
      solution: t("clients.aliwen.solutionDesc"),
      results: [
        { value: t("clients.aliwen.result1"), label: t("clients.aliwen.result1Label"), icon: TrendingUp },
        { value: t("clients.aliwen.result2"), label: t("clients.aliwen.result2Label"), icon: BarChart3 },
        { value: t("clients.aliwen.result3"), label: t("clients.aliwen.result3Label"), icon: CheckCircle2 },
      ],
      icon: Store,
    },
    {
      id: "telasClaudia",
      name: t("clients.telasClaudia.name"),
      subtitle: t("clients.telasClaudia.industry"),
      category: t("clients.telasClaudia.category"),
      description: t("clients.telasClaudia.description"),
      challenge: t("clients.telasClaudia.challengeDesc"),
      solution: t("clients.telasClaudia.solutionDesc"),
      results: [
        { value: t("clients.telasClaudia.result1"), label: t("clients.telasClaudia.result1Label"), icon: TrendingUp },
        { value: t("clients.telasClaudia.result2"), label: t("clients.telasClaudia.result2Label"), icon: BarChart3 },
        { value: t("clients.telasClaudia.result3"), label: t("clients.telasClaudia.result3Label"), icon: CheckCircle2 },
      ],
      icon: Scissors,
    },
    {
      id: "cea",
      name: t("clients.cea.name"),
      subtitle: t("clients.cea.industry"),
      category: t("clients.cea.category"),
      description: t("clients.cea.description"),
      challenge: t("clients.cea.challengeDesc"),
      solution: t("clients.cea.solutionDesc"),
      results: [
        { value: t("clients.cea.result1"), label: t("clients.cea.result1Label"), icon: TrendingUp },
        { value: t("clients.cea.result2"), label: t("clients.cea.result2Label"), icon: BarChart3 },
        { value: t("clients.cea.result3"), label: t("clients.cea.result3Label"), icon: CheckCircle2 },
      ],
      icon: GraduationCap,
    },
    {
      id: "dimayer",
      name: t("clients.dimayer.name"),
      subtitle: t("clients.dimayer.industry"),
      category: t("clients.dimayer.category"),
      description: t("clients.dimayer.description"),
      challenge: t("clients.dimayer.challengeDesc"),
      solution: t("clients.dimayer.solutionDesc"),
      results: [
        { value: t("clients.dimayer.result1"), label: t("clients.dimayer.result1Label"), icon: TrendingUp },
        { value: t("clients.dimayer.result2"), label: t("clients.dimayer.result2Label"), icon: BarChart3 },
        { value: t("clients.dimayer.result3"), label: t("clients.dimayer.result3Label"), icon: CheckCircle2 },
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-flow-row-dense">
          {clients.map((client, index) => {
            const Icon = client.icon
            const isExpanded = expandedId === client.id

            return (
              <motion.article
                key={client.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setExpandedId((prev) => (prev === client.id ? null : client.id))}
                className={[
                  "group flex h-full cursor-pointer flex-col rounded-[22px] border border-border bg-card p-5 md:p-6 shadow-none transition-all duration-300",
                  isExpanded ? "lg:col-span-2 lg:min-h-[720px]" : "lg:col-span-1 lg:min-h-[560px]",
                ].join(" ")}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Icon className="h-5 w-5 text-foreground/60" strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-serif text-[28px] leading-[0.95] text-foreground break-words min-h-[84px]">
                        {client.name}
                      </h3>
                      <p className="mt-2 text-[15px] leading-tight text-muted-foreground min-h-[38px]">
                        {client.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-muted px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {client.category}
                  </span>
                </div>

                <div className="mb-4 min-h-[250px]">
                  <p className="line-clamp-6 text-[15px] leading-8 text-muted-foreground">
                    {client.description}
                  </p>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      layout
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mb-4 border-t border-border pt-5">
                        <h4 className="mb-3 text-[18px] font-semibold text-foreground">
                          {t("clients.challengeTitle")}
                        </h4>
                        <p className="text-[15px] leading-8 text-muted-foreground">{client.challenge}</p>

                        <h4 className="mt-7 mb-3 text-[18px] font-semibold text-foreground">
                          {t("clients.solutionTitle")}
                        </h4>
                        <p className="text-[15px] leading-8 text-muted-foreground">{client.solution}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-auto border-t border-border pt-4">
                  <div className="grid grid-cols-3 gap-4">
                    {client.results.map((result, resultIndex) => {
                      const ResultIcon = result.icon

                      return (
                        <div key={`${client.id}-result-${resultIndex}`} className="text-center min-h-[92px]">
                          <div className="mx-auto mb-1 flex h-5 w-5 items-center justify-center">
                            <ResultIcon className="h-4 w-4 text-accent" />
                          </div>

                          <div className="font-serif text-[18px] md:text-[22px] font-bold leading-none text-foreground break-words min-h-[44px] flex items-center justify-center">
                            {result.value}
                          </div>

                          <div className="mt-1 text-[10px] uppercase leading-[1.25] tracking-wide text-muted-foreground break-words min-h-[28px] flex items-start justify-center">
                            {result.label}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-3 flex justify-end">
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="h-5 w-5 text-foreground/50" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}