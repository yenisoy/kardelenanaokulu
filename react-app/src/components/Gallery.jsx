import { motion } from 'framer-motion'
import { Instagram, ArrowUpRight } from 'lucide-react'
import { GALLERY_ITEMS, SCHOOL } from '../data/content'

export default function Gallery() {
  return (
    <section
      id="galeri"
      aria-labelledby="gallery-heading"
      className="relative py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="section-eyebrow text-kardelen-sky">Galeri</span>
            <h2
              id="gallery-heading"
              className="mt-5 font-display text-3xl font-700 leading-tight text-kardelen-ink sm:text-4xl"
            >
              Renkli dünyamızdan{' '}
              <span className="text-kardelen-sky">kareler</span>
            </h2>
            <p className="mt-4 text-lg text-kardelen-ink-soft">
              Tanıtım günlerimizden, atölye çalışmalarımızdan ve fen
              deneylerimizden gerçek anlar.
            </p>
          </div>
          <a
            href={SCHOOL.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-700 text-kardelen-ink shadow-card transition-transform hover:-translate-y-0.5"
          >
            <Instagram className="h-5 w-5 text-kardelen-orange" />
            Instagram’da Takip Et
          </a>
        </div>

        {/* Temiz, boşluksuz grid — her karo aynı oranda */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.figure
              key={item.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-kardelen-orange-tint shadow-card"
            >
              <img
                src={item.src}
                alt={`${item.label} — Kardelen Anaokulu etkinliği`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Alt karartma + başlık */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-700 text-kardelen-ink backdrop-blur">
                {item.tag}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 font-display text-sm font-600 text-white sm:text-base">
                {item.label}
              </figcaption>
            </motion.figure>
          ))}

          {/* Instagram davet karosu — grid'i tamamlar ve takip ettirir */}
          <motion.a
            href={SCHOOL.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: GALLERY_ITEMS.length * 0.06 }}
            className="group relative flex aspect-[4/5] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-gradient-to-br from-kardelen-orange via-kardelen-orange-soft to-kardelen-sky p-5 text-center text-white shadow-soft"
          >
            <Instagram className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display text-lg font-700 leading-tight">
              Daha fazlası Instagram’da
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-600 text-white/90">
              {SCHOOL.instagramHandle}
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
