FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# Copy nginx.conf จากโฟลเดอร์ frontend/nginx.conf ไปทับ default config ของ nginx container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy ไฟล์ build React (Vite) จาก builder stage ไปยังโฟลเดอร์ serve ของ nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# copy ssl certs เข้า container nginx (เพิ่มบรรทัดนี้)
COPY ssl /etc/nginx/ssl

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
