"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Leaf, TrendingUp, BarChart3, CheckCircle2, Target, Lightbulb } from "lucide-react"
import { useEffect, useState } from "react"

export function Clients() {
  const { t } = useLanguage()

  const title = t("clients.title")
  const words = title.split(" ")

  // ✅ Replay igual que Services (si NO querés replay, borrá este bloque y dejá titleCycle fijo en 0)
  const REPLAY_MS = 45_000
  const [titleCycle, setTitleCycle] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => setTitleCycle((v) => v + 1), REPLAY_MS)
    return () => window.clearInterval(id)
  }, [])

  // ✅ mismos “timings” que tu Services (LENTO)
  const TITLE_STAGGER = 0.16
  const WORD_DURATION = 0.8
  const WORD_Y = 16

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

          {/* ✅ Importante: key + animate (igual que Services) */}
          <motion.h2
            key={`clients-title-${titleCycle}`}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: TITLE_STAGGER,
                  staggerDirection: -1, // ✅ entra desde “nosotros” hacia atrás
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

        {/* Aliwen Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 md:p-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">{t("clients.aliwen.name")}</h3>
                <span className="text-white/80 text-sm font-medium">{t("clients.aliwen.industry")}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-muted/50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-amber-500" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-foreground">{t("clients.aliwen.challenge")}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{t("clients.aliwen.challengeDesc")}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-muted/50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-foreground">{t("clients.aliwen.solution")}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{t("clients.aliwen.solutionDesc")}</p>
              </motion.div>
            </div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-center mb-6">
                <h4 className="font-serif font-bold text-xl text-foreground">{t("clients.aliwen.results")}</h4>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-8">
                <div className="text-center p-3 md:p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-500/20">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="font-serif text-xl md:text-4xl font-bold text-emerald-600 mb-1">
                    {t("clients.aliwen.result1")}
                  </div>
                  <div className="text-[11px] leading-tight md:text-sm text-muted-foreground font-medium break-words">
                    {t("clients.aliwen.result1Label")}
                  </div>
                </div>

                <div className="text-center p-3 md:p-6 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl border border-blue-500/20">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="font-serif text-xl md:text-4xl font-bold text-blue-600 mb-1">
                    {t("clients.aliwen.result2")}
                  </div>
                  <div className="text-[11px] leading-tight md:text-sm text-muted-foreground font-medium break-words">
                    {t("clients.aliwen.result2Label")}
                  </div>
                </div>

                <div className="text-center p-3 md:p-6 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-violet-500 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="font-serif text-xl md:text-4xl font-bold text-violet-600 mb-1">
                    {t("clients.aliwen.result3")}
                  </div>
                  <div className="text-[11px] leading-tight md:text-sm text-muted-foreground font-medium break-words">
                    {t("clients.aliwen.result3Label")}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
