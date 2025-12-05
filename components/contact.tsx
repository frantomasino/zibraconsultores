"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"
import { Mail, Phone, MapPin, Building2, User, MessageCircle } from "lucide-react"
import { useRef, useState } from "react"

export function Contact() {
  const { t } = useLanguage()

  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  // 👉 ejecuta validación nativa del navegador
  const validateNative = () => {
    if (!formRef.current) return false
    return formRef.current.reportValidity()
  }

  const sendEmail = () => {
    if (!validateNative()) return

    const subject = `${t("contact.email.subject")} - ${formData.name}`
    const body = `
${t("contact.email.name")}: ${formData.name}
${t("contact.email.email")}: ${formData.email}
${t("contact.email.phone")}: ${formData.phone}
${t("contact.email.company")}: ${formData.company}

${t("contact.email.message")}:
${formData.message}
`

    window.location.href = `mailto:info@gelsoconsulting.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  const sendWhatsApp = () => {
    if (!validateNative()) return

    const text = `
*${t("contact.whatsapp.title")}*

*${t("contact.email.name")}:* ${formData.name}
*${t("contact.email.email")}:* ${formData.email}
*${t("contact.email.phone")}:* ${formData.phone}
*${t("contact.email.company")}:* ${formData.company}

*${t("contact.email.message")}:*
${formData.message}
`
    const phone = "5491131256510"

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <section id="contact" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITULO */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">{t("contact.badge")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">{t("contact.title")}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* FORMULARIO */}
          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            
            {/* FORM REAL */}
            <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="space-y-6">

              {/* NOMBRE */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  className="pl-10"
                  placeholder={t("contact.form.name")}
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  className="pl-10"
                  placeholder={t("contact.form.email")}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* TELÉFONO */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="tel"
                  className="pl-10"
                  placeholder={t("contact.form.phone")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* EMPRESA */}
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  className="pl-10"
                  placeholder={t("contact.form.company")}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              {/* MENSAJE */}
              <div className="relative">
                <Textarea
                  className="pl-2"
                  placeholder={t("contact.form.message")}
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* BOTON SUBMIT OCULTO (obligatorio para validación nativa) */}
              <button type="submit" hidden></button>
            </form>

            {/* BOTONES */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                onClick={sendEmail}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {t("contact.form.sendEmail")}
              </Button>

              <Button
                type="button"
                onClick={sendWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {t("contact.form.sendWhatsApp")}
              </Button>
            </div>

          </div>

          {/* INFORMACIÓN + IMAGEN */}
          <div className="space-y-8">

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">{t("contact.info.title")}</h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">{t("contact.info.phone")}</p>
                    <p className="text-muted-foreground">+54 9 11 3125 6510</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">{t("contact.info.email")}</p>
                    <p className="text-muted-foreground">prueba@gelsoconsulting.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">{t("contact.info.address")}</p>
                    <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                  </div>
                </div>

              </div>
            </div>

            {/* IMAGEN */}
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src="/modern-office-exterior.png"
                alt="Oficina"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
