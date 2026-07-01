import { motion } from 'framer-motion'
import { EDUCATION_MODELS } from '../data/content'

// Vurgu rengine göre Tailwind sınıfları (JIT'in görebilmesi için tam sınıf adları)
const ACCENT = {
  orange: {
    chip: 'bg-kardelen-orange-tint text-kardelen-orange',
    ring: 'group-hover:ring-kardelen-orange/40',
  },
  sky: {
    chip: 'bg-kardelen-sky-tint text-kardelen-sky',
    ring: 'group-hover:ring-kardelen-sky/40',
  },
  green: {
    chip: 'bg-kardelen-green-tint text-kardelen-green',
    ring: 'group-hover:ring-kardelen-green/40',
  },
}

export default function EducationModels() {
  return (
    <section
      id="egitim"
      aria-labelledby="edu-heading"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="blob right-[-6%] top-20 h-72 w-72 rounded-full bg-kardelen-orange-soft" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-kardelen-green">
            Eğitim Modelimiz
          </span>
          <h2
            id="edu-heading"
            className="mt-5 font-display text-3xl font-700 leading-tight text-kardelen-ink sm:text-4xl"
          >
            Çok yönlü gelişim için{' '}
            <span className="text-kardelen-orange">zenginleştirilmiş</span>{' '}
            atölyeler
          </h2>
          <p className="mt-4 text-lg text-kardelen-ink-soft">
            Ezbere değil, keşfetmeye dayalı bir öğrenme modeliyle çocuklarımızın
            her alanda gelişmesini destekliyoruz.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {EDUCATION_MODELS.map(({ icon: Icon, title, desc, accent }) => {
            const a = ACCENT[accent]
            return (
              <motion.article
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className={`group rounded-3xl bg-kardelen-cream p-7 ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card ${a.ring} hover:ring-4`}
              >
                <span
                  className={`inline-flex rounded-2xl p-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${a.chip}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 font-display text-xl font-600 text-kardelen-ink">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-kardelen-ink-soft">
                  {desc}
                </p>
              </motion.article>
            )
          })}

          {/* Kapanış kartı — dengeli grid için editoryal vurgu */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-kardelen-orange to-kardelen-orange-soft p-7 text-white shadow-soft"
          >
            <span className="text-4xl">🌟</span>
            <h3 className="mt-4 font-display text-xl font-700">
              Bizim İçin Her Çocuk Özeldir
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/90">
              Her çocuğun kendi hızında, kendi yeteneğiyle parladığı bir eğitim
              anlayışı.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
