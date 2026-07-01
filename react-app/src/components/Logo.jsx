import { useState } from 'react'

// Kardelen logosu.
// Gerçek logoyu `public/logo.png` olarak kaydedin — otomatik kullanılır.
// Dosya yoksa aşağıdaki SVG yer tutucu (güneş + iki çocuk) gösterilir.
export default function Logo({ className = '', alt = 'Özel Pendik Kardelen Anaokulu' }) {
  const [failed, setFailed] = useState(false)

  if (!failed) {
    return (
      <img
        src="/logo.png"
        alt={alt}
        className={className}
        onError={() => setFailed(true)}
        style={{ objectFit: 'contain' }}
      />
    )
  }

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={alt}
    >
      {/* Güneş */}
      <circle cx="32" cy="24" r="11" fill="#FF9E57" />
      {[...Array(8)].map((_, i) => {
        const a = (i * Math.PI) / 4
        const x1 = 32 + Math.cos(a) * 14
        const y1 = 24 + Math.sin(a) * 14
        const x2 = 32 + Math.cos(a) * 19
        const y2 = 24 + Math.sin(a) * 19
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FF9E57"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )
      })}
      {/* İki çocuk figürü */}
      <circle cx="24" cy="42" r="6" fill="#8FCB6A" />
      <path d="M15 60c0-6 4-10 9-10s9 4 9 10z" fill="#8FCB6A" />
      <circle cx="42" cy="42" r="6" fill="#8FCB6A" />
      <path d="M33 60c0-6 4-10 9-10s9 4 9 10z" fill="#8FCB6A" />
    </svg>
  )
}
