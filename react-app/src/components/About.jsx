import { motion } from 'framer-motion'
import { HeartHandshake, Users, ShieldCheck, Palette } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: HeartHandshake,
    title: 'Sevgi Dolu Ortam',
    desc: 'Her çocuğun kendini güvende ve değerli hissettiği sıcak bir yuva.',
  },
  {
    icon: Users,
    title: 'Uzman Eğitmenler',
    desc: 'Alanında uzman kadromuz bireysel yetenekleri keşfetmeye odaklanır.',
  },
  {
    icon: ShieldCheck,
    title: 'Güvenli Kampüs',
    desc: 'Mahremiyete önem veren, çocuk odaklı ve denetimli bir kurum.',
  },
  {
    icon: Palette,
    title: 'Keşfederek Öğrenme',
    desc: 'Ezbere değil; deneyerek, üreterek ve oyunla öğrenmeyi önemsiyoruz.',
  },
]

export default function About() {
  return (
    <section
      id="hakkimizda"
      aria-labelledby="about-heading"
      className="relative py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-eyebrow text-kardelen-sky">Hakkımızda</span>
            <h2
              id="about-heading"
              className="mt-5 font-display text-3xl font-700 leading-tight text-kardelen-ink sm:text-4xl"
            >
              Geleceğin teminatı çocuklarımız için{' '}
              <span className="text-kardelen-green">en iyisini</span> birlikte
              inşa ediyoruz.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-kardelen-ink-soft">
              <strong className="text-kardelen-ink">
                Özel Pendik Kardelen Anaokulu
              </strong>{' '}
              olarak 3-6 yaş arası çocuklarımızın bilişsel, motor, sosyal ve
              duygusal gelişimlerini destekleyen modern ve sevgi dolu bir eğitim
              ortamı sunuyoruz.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-kardelen-ink-soft">
              Kavakpınar Eğitim Kurumları güvencesiyle, her çocuğun bireysel
              yeteneklerini keşfetmesine olanak tanıyan zenginleştirilmiş bir
              programla buradayız.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="rounded-3xl bg-white p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex rounded-2xl bg-kardelen-orange-tint p-3">
                  <Icon className="h-6 w-6 text-kardelen-orange" />
                </span>
                <h3 className="mt-4 font-display text-lg font-600 text-kardelen-ink">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-kardelen-ink-soft">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
