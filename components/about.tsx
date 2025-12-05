"use client"

import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  const team = [
    {
      name: t("about.team.member1.name"),
      title: t("about.team.member1.title"),
      expertise: t("about.team.member1.expertise"),
      image: "/team-member-3.jpg",
    },
    {
      name: t("about.team.member2.name"),
      title: t("about.team.member2.title"),
      expertise: t("about.team.member2.expertise"),
      image: "/team-member-3.jpg",
    },
    {
      name: t("about.team.member3.name"),
      title: t("about.team.member3.title"),
      expertise: t("about.team.member3.expertise"),
      image: "/team-member-3.jpg",
    },
  ]

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t("about.intro")}</p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Photo */}
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Name Badge */}
              <div className="bg-accent text-white px-6 py-3 mb-4 w-full">
                <h3 className="text-xl font-bold">{member.name}</h3>
              </div>

              {/* Title */}
              <p className="font-semibold text-foreground mb-4">{member.title}</p>

              {/* Expertise List */}
              <div className="text-left space-y-2 text-sm text-muted-foreground">
                {member.expertise.split("\n").map((item, i) => (
                  <p key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
