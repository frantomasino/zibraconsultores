"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"
import { Mail, Phone, MapPin, Building2, User, MessageCircle, Clock } from "lucide-react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"

const MAX = 500

export function Contact() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const WHATSAPP_PHONE = "5491131256510"

  const validateNative = () => {
    if (!formRef.current) return false
    return formRef.current.reportValidity()
  }

  const sendWhatsApp = (mode: "full" | "quick" = "full") => {
    if (mode === "full" && !validateNative()) return

    const text =
      mode === "quick"
        ? t("contact.whatsapp.quickText")
        : `
*${t("contact.whatsapp.title")}*

*${t("contact.email.name")}:* ${formData.name}
*${t("contact.email.email")}:* ${formData.email}
*${t("contact.email.phone")}:* ${formData.phone}
*${t("contact.email.company")}:* ${formData.company}

*${t("contact.email.message")}*
${formData.message}
`.trim()

    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, "_blank")

    toast({
      title: t("contact.toast.whatsappTitle"),
      description: t("contact.toast.whatsappDesc"),
    })
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-background via-muted/20 to-background py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {t("contact.form.cardTitle")}
              </h3>

              <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="relative">
                  <label htmlFor="name" className="sr-only">
                    {t("contact.form.name")}
                  </label>
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="pl-10 h-12"
                    placeholder={t("contact.form.name")}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="sr-only">
                    {t("contact.form.email")}
                  </label>
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="pl-10 h-12"
                    placeholder={t("contact.form.email")}
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="sr-only">
                    {t("contact.form.phone")}
                  </label>
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="pl-10 h-12"
                    placeholder={t("contact.form.phone")}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="company" className="sr-only">
                    {t("contact.form.company")}
                  </label>
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="pl-10 h-12"
                    placeholder={t("contact.form.company")}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="sr-only">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    className="pl-2 resize-none"
                    placeholder={t("contact.form.message")}
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value.slice(0, MAX) })
                    }
                  />
                  <div className="mt-2 text-xs text-muted-foreground">
                    {t("contact.form.maxChars")} ({formData.message.length}/{MAX})
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => sendWhatsApp("full")}
                  className="h-12 w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("contact.form.cta")}
                </Button>
              </form>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/contacto-office.webp"
                alt="Espacio de trabajo y atención de Zibra Consultores"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {t("contact.info.title")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t("contact.info.address")}</p>
                    <p className="text-muted-foreground">{t("contact.info.addressLine1")}</p>
                    <p className="text-muted-foreground">{t("contact.info.addressLine2")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t("contact.info.phone")}</p>
                    <p className="text-muted-foreground">{t("contact.info.phoneLine1")}</p>
                    <p className="text-muted-foreground">{t("contact.info.phoneLine2")}</p>
                    <p className="text-muted-foreground">{t("contact.info.phoneLine3")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t("contact.info.email")}</p>
                    <p className="text-muted-foreground">{t("contact.info.emailLine")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t("contact.info.hours")}</p>
                    <p className="text-muted-foreground">{t("contact.info.hoursLine")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-sm">
              <h3 className="text-2xl font-semibold">{t("contact.urgent.title")}</h3>
              <p className="mt-2 text-primary-foreground/90">{t("contact.urgent.subtitle")}</p>

              <Button
                type="button"
                onClick={() => sendWhatsApp("quick")}
                className="mt-5 bg-background text-foreground hover:bg-background/90 font-semibold h-11 px-4 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t("contact.urgent.cta")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}