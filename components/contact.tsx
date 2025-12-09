"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"
import { Mail, Phone, MapPin, Building2, User, MessageCircle } from "lucide-react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

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

  // validación nativa del navegador
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
      subject,
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
    <section
      id="contact"
      className="bg-gradient-to-br from-background via-muted/20 to-background py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TÍTULO + INTRO CON ANIMACIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            {t("contact.badge")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* FORMULARIO CON ANIMACIÓN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-8 space-y-6 shadow-lg"
          >
            <form
              ref={formRef}
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              {/* NOMBRE */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  className="pl-10 h-12"
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
                  className="pl-10 h-12"
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
                  className="pl-10 h-12"
                  placeholder={t("contact.form.phone")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* EMPRESA */}
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  className="pl-10 h-12"
                  placeholder={t("contact.form.company")}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              {/* MENSAJE */}
              <div className="relative">
                <Textarea
                  className="pl-2 resize-none"
                  placeholder={t("contact.form.message")}
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* BOTÓN SUBMIT OCULTO (para validación nativa) */}
              <button type="submit" hidden></button>

              {/* BOTONES */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Button
                  type="button"
                  onClick={sendEmail}
                  className="h-12 w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <Mail className="w-4 h-4" />
                  {t("contact.form.sendEmail")}
                </Button>

                <Button
                  type="button"
                  onClick={sendWhatsApp}
                  className="h-12 w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("contact.form.sendWhatsApp")}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* INFORMACIÓN + IMAGEN CON ANIMACIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* BLOQUE INFO */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {t("contact.info.title")}
              </h3>

              <div className="space-y-6">
                {/* TELÉFONO */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("contact.info.phone")}
                    </p>
                    <p className="text-muted-foreground">+54 9 11 3125 6510</p>
                  </div>
                </motion.div>

                {/* EMAIL */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("contact.info.email")}
                    </p>
                    <p className="text-muted-foreground">prueba@gmail.com</p>
                  </div>
                </motion.div>

                {/* DIRECCIÓN */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("contact.info.address")}
                    </p>
                    <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* IMAGEN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="/modern-office-exterior.png"
                alt="Oficina"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
