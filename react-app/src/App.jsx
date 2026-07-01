import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import EducationModels from './components/EducationModels'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import WhatsAppIcon from './components/WhatsAppIcon'
import { WHATSAPP_URL } from './data/content'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <EducationModels />
        <Gallery />
        <Contact />
      </main>

      {/* Sabit WhatsApp butonu — yumuşak yeşil hale içinde WhatsApp logosu */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
        className="group fixed bottom-5 right-5 z-50 flex h-20 w-20 items-center justify-center rounded-full sm:bottom-7 sm:right-7"
      >
        {/* Dış yumuşak hale halkaları */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/15" />
        <span className="absolute inset-2 rounded-full bg-[#25D366]/25" />
        {/* Nabız efekti */}
        <span className="absolute inset-3 animate-ping rounded-full bg-[#25D366]/30" />
        {/* Yeşil buton + logo */}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
          <WhatsAppIcon className="h-8 w-8" />
        </span>
      </motion.a>
    </>
  )
}
