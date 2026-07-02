import { motion } from 'framer-motion'
import { Phone, MapPin, Instagram, Clock } from 'lucide-react'
import Logo from './Logo'
import WhatsAppIcon from './WhatsAppIcon'
import { SCHOOL, WHATSAPP_URL } from '../data/content'

const mapsUrl = SCHOOL.mapsUrl

export default function Contact() {
  return (
    <section
      id="iletisim"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-white pt-20 lg:pt-28"
    >
      <div className="blob left-[-8%] top-10 h-72 w-72 rounded-full bg-kardelen-green-soft" />

      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-kardelen-sky-tint via-white to-kardelen-orange-tint p-8 shadow-card sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Sol: davet + WhatsApp */}
            <div>
              <span className="section-eyebrow text-kardelen-orange">İletişim</span>
              <h2
                id="contact-heading"
                className="mt-5 font-display text-3xl font-700 leading-tight text-kardelen-ink sm:text-4xl"
              >
                Okulumuzu gezmek ister misiniz?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-kardelen-ink-soft">
                Kayıt bilgisi almak ve randevu oluşturmak için bize hemen
                WhatsApp’tan ulaşın. Çocuğunuz için en iyisini birlikte
                planlayalım.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 font-700 text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-6 w-6" />
                WhatsApp’tan Yazın
              </a>
              <a
                href={`tel:+${SCHOOL.phoneRaw}`}
                className="mt-3 block font-display text-2xl font-700 text-kardelen-ink"
              >
                {SCHOOL.phoneDisplay}
              </a>
            </div>

            {/* Sağ: iletişim bilgileri */}
            <div className="grid gap-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="rounded-2xl bg-kardelen-sky-tint p-3">
                  <MapPin className="h-6 w-6 text-kardelen-sky" />
                </span>
                <span>
                  <span className="block font-700 text-kardelen-ink">Adres</span>
                  <span className="text-sm text-kardelen-ink-soft">
                    {SCHOOL.address}
                  </span>
                </span>
              </a>

              <a
                href={`tel:+${SCHOOL.phoneRaw}`}
                className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="rounded-2xl bg-kardelen-orange-tint p-3">
                  <Phone className="h-6 w-6 text-kardelen-orange" />
                </span>
                <span>
                  <span className="block font-700 text-kardelen-ink">Telefon</span>
                  <span className="text-sm text-kardelen-ink-soft">
                    {SCHOOL.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={SCHOOL.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="rounded-2xl bg-kardelen-green-tint p-3">
                  <Instagram className="h-6 w-6 text-kardelen-green" />
                </span>
                <span>
                  <span className="block font-700 text-kardelen-ink">Instagram</span>
                  <span className="text-sm text-kardelen-ink-soft">
                    {SCHOOL.instagramHandle}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-card">
                <span className="rounded-2xl bg-kardelen-orange-tint p-3">
                  <Clock className="h-6 w-6 text-kardelen-orange" />
                </span>
                <span>
                  <span className="block font-700 text-kardelen-ink">Yaş Grubu</span>
                  <span className="text-sm text-kardelen-ink-soft">
                    {SCHOOL.ageRange} arası çocuklar
                  </span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-kardelen-ink/5 bg-kardelen-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-16 w-auto" />
          <p className="text-sm text-kardelen-ink-soft">{SCHOOL.parent}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SCHOOL.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full bg-white p-3 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <Instagram className="h-5 w-5 text-kardelen-orange" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-full bg-white p-3 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
          </a>
          <a
            href={`tel:+${SCHOOL.phoneRaw}`}
            aria-label="Telefon"
            className="rounded-full bg-white p-3 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-5 w-5 text-kardelen-sky" />
          </a>
        </div>
      </div>
      <div className="border-t border-kardelen-ink/5 py-5 text-center text-sm text-kardelen-ink-soft">
        © {new Date().getFullYear()} {SCHOOL.name}. Tüm Hakları Saklıdır.
      </div>
    </footer>
  )
}
