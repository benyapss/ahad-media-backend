# Gunakan versi Node yang stabil dan cocok untuk npm terbaru
FROM node:20-alpine

# Buat folder kerja
WORKDIR /app

# Salin file dependency
COPY package*.json ./

# Install dependency tanpa cache & dengan flag aman
RUN npm ci --omit=dev --legacy-peer-deps

# Salin seluruh project
COPY . .

# Build NestJS project
RUN npm run build

# Port default NestJS
EXPOSE 3000

# Jalankan backend
CMD ["npm", "run", "start:prod"]
