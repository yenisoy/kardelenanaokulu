# Özel Pendik Kardelen Anaokulu — Web Sitesi

Aynı tasarımın **iki bağımsız sürümü** tek repoda. Her ikisi de Coolify'da ayrı ayrı yayınlanabilir.

```
.
├── react-app/     # Vite + React + Tailwind sürümü (build gerektirir)
└── html-site/     # Tek dosya statik HTML sürümü (build gerektirmez)
```

Tasarım, içerik, renkler ve WhatsApp/Instagram bağlantıları iki sürümde **birebir aynıdır**.
Fark yalnızca teknik altyapıdadır — birini seçip yayınlayabilir veya ikisini de çalıştırabilirsiniz.

| | `react-app/` | `html-site/` |
|---|---|---|
| Teknoloji | Vite + React + Tailwind + Framer Motion | HTML + gömülü CSS + vanilla JS |
| Build adımı | Var (`npm run build`) | Yok |
| Servis | nginx (statik `dist/`) | nginx (statik dosyalar) |
| Coolify Base Directory | `react-app` | `html-site` |
| Dockerfile | `react-app/Dockerfile` | `html-site/Dockerfile` |

---

## ☁️ Coolify'da Yayınlama (İKİ ayrı uygulama)

Coolify'da **aynı Git deposundan iki Application** oluşturun. Tek fark: **Base Directory**.

### 1) React sürümü
1. **New Resource → Application → (bu Git reposu)**
2. **Build Pack:** `Dockerfile`
3. **Base Directory:** `react-app`
4. **Dockerfile Location:** `Dockerfile` (Base Directory'ye göredir)
5. **Port:** `80`
6. Deploy → kendi domain'inizi bağlayın (örn. `www.kardelen...`).

### 2) HTML sürümü
1. **New Resource → Application → (aynı Git reposu)**
2. **Build Pack:** `Dockerfile`
3. **Base Directory:** `html-site`
4. **Dockerfile Location:** `Dockerfile`
5. **Port:** `80`
6. Deploy → farklı bir domain/subdomain bağlayın (örn. `html.kardelen...`).

> Her iki uygulama da statik dosyaları nginx ile servis eder; port **80** verilir.

---

## 💻 Yerelde İkisini Birden Çalıştırma

Docker ile (Docker Desktop açık olmalı):

```bash
docker compose up -d --build
# React → http://localhost:8080
# HTML  → http://localhost:8081
```

Docker olmadan:

```bash
# React sürümü
cd react-app && npm install && npm run dev      # http://localhost:5173

# HTML sürümü (ayrı terminal)
cd html-site && python -m http.server 8081      # http://localhost:8081
```

---

## ✏️ İçerik Güncelleme

**React sürümü:** tüm metin/telefon/adres/galeri → `react-app/src/data/content.js`

**HTML sürümü:** `html-site/index.html` (telefon/Instagram için dosya sonundaki `PHONE` ve `IG_URL` değişkenleri).
Galeri fotoğrafı eklemek için `html-site/assets/galeri/` içine atıp galeri bölümüne bir `<figure class="tile reveal">` bloğu kopyalayın.

**Görseller:** Logo `*/assets/logo.png` (html) ve `react-app/public/logo.png`; galeri fotoğrafları ilgili `galeri/` klasörlerinde.
