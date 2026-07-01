import {
  Brain,
  ChefHat,
  Drama,
  FlaskConical,
  Languages,
  Code2,
  Trees,
} from 'lucide-react'

// Kurum bilgileri — tek kaynaktan yönetilir
export const SCHOOL = {
  name: 'Özel Pendik Kardelen Anaokulu',
  parent: 'Kavakpınar Eğitim Kurumları',
  slogan: 'Bizim İçin Her Çocuk Özeldir',
  ageRange: '3-6 Yaş',
  address: 'Esenler Mahallesi, Çayır Sokak No:4, Pendik / İstanbul',
  phoneDisplay: '0552 699 57 73',
  phoneRaw: '905526995773',
  instagramHandle: '@ozelpendikkardelenanaokulu',
  instagramUrl: 'https://instagram.com/ozelpendikkardelenanaokulu',
  whatsappMessage:
    'Merhaba, Kardelen Anaokulu hakkında kayıt bilgisi almak istiyorum.',
}

export const WHATSAPP_URL = `https://wa.me/${SCHOOL.phoneRaw}?text=${encodeURIComponent(
  SCHOOL.whatsappMessage,
)}`

// Eğitim modelleri — kart yapısında ikonlarla gösterilir
export const EDUCATION_MODELS = [
  {
    icon: Brain,
    title: 'Tüzder Zeka ve Akıl Oyunları',
    desc: 'Analitik düşünme, dikkat ve problem çözme becerilerini oyunlarla geliştiriyoruz.',
    accent: 'orange',
  },
  {
    icon: ChefHat,
    title: 'Gastronomi',
    desc: 'Kendi atıştırmalıklarını hazırlarken el becerilerini ve özgüvenlerini güçlendiriyorlar.',
    accent: 'green',
  },
  {
    icon: Drama,
    title: 'Drama',
    desc: 'Kendini ifade etme, empati ve iletişim yeteneklerini sahnede keşfediyorlar.',
    accent: 'sky',
  },
  {
    icon: FlaskConical,
    title: 'Fen ve Doğa',
    desc: 'Deneyler yaparak (örn. “Suda Büyüyen Tırtıl”) dünyayı yaşayarak öğreniyorlar.',
    accent: 'green',
  },
  {
    icon: Languages,
    title: 'İngilizce',
    desc: 'Erken yaşta dil edinimini şarkılar ve oyunlarla eğlenceli hale getiriyoruz.',
    accent: 'sky',
  },
  {
    icon: Code2,
    title: 'Kodlama',
    desc: 'Teknolojiyle bilinçli, üretken ve yaşa uygun bir şekilde tanışmalarını sağlıyoruz.',
    accent: 'orange',
  },
  {
    icon: Trees,
    title: 'Bahçe Oyunları',
    desc: 'Temiz havada, doğayla iç içe fiziksel ve sosyal gelişimlerini destekliyoruz.',
    accent: 'green',
  },
]

// Galeri — okulun gerçek etkinlik fotoğrafları (public/galeri/ altında).
// Yeni fotoğraf eklemek için diziye { label, tag, src } ekleyin.
export const GALLERY_ITEMS = [
  { label: 'Mumluk Tasarımı', tag: 'Tasarım Atölyesi', src: '/galeri/tasarim-mumluk.jpg' },
  { label: 'Suda Büyüyen Tırtıl', tag: 'Fen Deneyi', src: '/galeri/fen-tirtil.jpg' },
  { label: 'İngilizce Meyveler', tag: 'İngilizce', src: '/galeri/ingilizce.jpg' },
  { label: 'Portfolyo Hatırası', tag: 'Etkinlik', src: '/galeri/portfolyo.jpg' },
  { label: 'Fotoğraf Makinesi', tag: 'Tasarım Atölyesi', src: '/galeri/tasarim-kamera.jpg' },
]
