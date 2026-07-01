# ---- Build aşaması ----
FROM node:20-alpine AS build
WORKDIR /app

# Bağımlılıkları önce kopyala (katman önbelleği için)
COPY package.json package-lock.json* ./
RUN npm install

# Kaynak kodu kopyala ve statik siteyi derle
COPY . .
RUN npm run build

# ---- Yayın aşaması (nginx ile statik servis) ----
FROM nginx:1.27-alpine AS runner

# Özel nginx yapılandırması (SPA fallback + gzip + cache)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Derlenmiş statik dosyaları kopyala
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
