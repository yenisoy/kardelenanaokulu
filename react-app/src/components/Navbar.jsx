import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'
import { SCHOOL, WHATSAPP_URL } from '../data/content'

const LINKS = [
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#egitim', label: 'Eğitim Modelimiz' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-card backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Ana menü"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"
      >
        <a href="#hero" className="flex items-center" aria-label="Ana sayfa">
          <Logo className="h-12 w-auto shrink-0 sm:h-14" />
        </a>

        {/* Masaüstü menü */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-600 text-kardelen-ink-soft transition-colors hover:bg-kardelen-orange-tint hover:text-kardelen-orange"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-kardelen-orange px-5 py-2.5 text-sm font-700 text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Kayıt Bilgisi
            </a>
          </li>
        </ul>

        {/* Mobil menü butonu */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          className="rounded-full bg-white/80 p-2.5 text-kardelen-ink shadow-card md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobil açılır menü */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="overflow-hidden bg-white px-5 pb-5 shadow-card md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-600 text-kardelen-ink transition-colors hover:bg-kardelen-orange-tint"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-kardelen-orange px-4 py-3 font-700 text-white"
              >
                <Phone className="h-4 w-4" />
                {SCHOOL.phoneDisplay}
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
