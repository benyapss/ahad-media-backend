# Gunakan Node.js versi 18 (stabil)
FROM node:18

# Set direktori kerja di dalam container
WORKDIR /app

# Salin file dependency lebih dulu
COPY package*.json ./

# Bersihkan cache dan pastikan npm terbaru
RUN npm install -g npm@latest
RUN npm cache clean --force

# Install dependency project
RUN npm install --legacy-peer-deps

# Salin semua file project ke container
COPY . .

# Build project NestJS
RUN npm run build

# Buka port default NestJS
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start:prod"]
