# Statik site — build adımı yok, dosyaları doğrudan nginx ile servis et.
FROM nginx:1.27-alpine

# Özel nginx yapılandırması (gzip + cache + güvenlik başlıkları)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# index.html + assets/ klasörünü kopyala
COPY index.html /usr/share/nginx/html/index.html
COPY assets /usr/share/nginx/html/assets

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
