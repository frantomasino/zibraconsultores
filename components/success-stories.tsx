"use client"

import { useLanguage } from "@/lib/language-context"
import { TrendingUp, Users, Award, Target } from "lucide-react"

export function SuccessStories() {
  const { t } = useLanguage()

  const stories = [
    {
      icon: TrendingUp,
      metricKey: "successStories.story1.metric",
      titleKey: "successStories.story1.title",
      descKey: "successStories.story1.desc",
    },
    {
      icon: Users,
      metricKey: "successStories.story2.metric",
      titleKey: "successStories.story2.title",
      descKey: "successStories.story2.desc",
    },
    {
      icon: Award,
      metricKey: "successStories.story3.metric",
      titleKey: "successStories.story3.title",
      descKey: "successStories.story3.desc",
    },
    {
      icon: Target,
      metricKey: "successStories.story4.metric",
      titleKey: "successStories.story4.title",
      descKey: "successStories.story4.desc",
    },
  ]

  return (
    <section id="success-stories" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">{t("successStories.badge")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            {t("successStories.title")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t("successStories.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-3">{t(story.metricKey)}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(story.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(story.descKey)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
