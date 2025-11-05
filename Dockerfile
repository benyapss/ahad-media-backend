# Gunakan Node.js versi 20 Alpine (ringan dan stabil)
FROM node:20-alpine

# Tentukan folder kerja
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Salin semua file project
COPY . .

# Build NestJS project
RUN npx nest build

# Buka port 3000
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start:prod"]
