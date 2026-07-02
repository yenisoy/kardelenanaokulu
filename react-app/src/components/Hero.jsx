import { motion } from 'framer-motion'
import { Sparkles, MapPin, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { SCHOOL, WHATSAPP_URL } from '../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40"
    >
      {/* Yumuşak pastel arka plan lekeleri */}
      <div className="blob left-[-10%] top-10 h-72 w-72 rounded-full bg-kardelen-orange-soft" />
      <div className="blob right-[-8%] top-32 h-80 w-80 rounded-full bg-kardelen-sky-soft" />
      <div className="blob bottom-0 left-1/3 h-72 w-72 rounded-full bg-kardelen-green-soft" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="section-eyebrow text-kardelen-orange">
            <Sparkles className="h-4 w-4" />
            {SCHOOL.ageRange} · {SCHOOL.parent}
          </motion.span>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-5 font-display text-4xl font-700 leading-[1.05] text-kardelen-ink sm:text-5xl lg:text-6xl"
          >
            Oynayarak öğrenen,{' '}
            <span className="relative whitespace-nowrap text-kardelen-orange">
              sevgiyle büyüyen
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C60 3 240 3 298 9"
                  stroke="#8FCB6A"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            çocuklar
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-relaxed text-kardelen-ink-soft"
          >
            <strong className="font-800 text-kardelen-ink">
              {SCHOOL.slogan} 🌟
            </strong>{' '}
            Pendik’te, çocuklarınızın güvenle sosyalleşip keşfederek büyüdüğü
            sıcacık bir yuva.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-kardelen-orange px-7 py-3.5 font-700 text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Ücretsiz Tanıtım & Kayıt
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#egitim"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-700 text-kardelen-ink shadow-card transition-transform hover:-translate-y-0.5"
            >
              Eğitim Modelimiz
            </a>
          </motion.div>

          <motion.a
            variants={item}
            href={SCHOOL.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-2 text-sm font-600 text-kardelen-ink-soft transition-colors hover:text-kardelen-sky"
          >
            <MapPin className="h-4 w-4 text-kardelen-sky" />
            Esenler Mah. Çayır Sk. No:4, Pendik / İstanbul
          </motion.a>
        </motion.div>

        {/* Görsel alanı */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Mutlu çocukların olduğu karşılama görseli için yer tutucu.
              Gerçek fotoğraf: /public/hero-cocuklar.jpg ekleyip src'yi güncelleyin. */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-kardelen-sky-tint via-white to-kardelen-green-tint p-8 shadow-card">
            <img
              src="/hero-cocuklar.jpg"
              alt="Kardelen Anaokulu'nda oyun oynayan mutlu çocuklar"
              className="h-full w-full rounded-[1.75rem] object-cover"
              loading="eager"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            {/* Görsel yüklenene kadar gösterilecek dostane sahne */}
            <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
              <Logo className="h-auto w-64 max-w-full animate-float" />
              <p className="font-display text-xl font-600 text-kardelen-ink">
                Çocuklar İçin Buradayız
              </p>
              <p className="text-sm text-kardelen-ink-soft">
                (Buraya mutlu çocukların fotoğrafını ekleyin)
              </p>
            </div>
          </div>

          {/* Yüzen dekoratif rozetler */}
          <div className="absolute -left-4 top-8 animate-float-slow rounded-2xl bg-white px-4 py-3 shadow-card">
            <span className="text-2xl">🎨</span>
          </div>
          <div className="absolute -right-3 bottom-16 animate-float rounded-2xl bg-white px-4 py-3 shadow-card">
            <span className="text-2xl">🔬</span>
          </div>
          <div className="absolute -bottom-4 left-12 animate-wiggle rounded-2xl bg-white px-4 py-3 shadow-card">
            <span className="text-2xl">🌳</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
