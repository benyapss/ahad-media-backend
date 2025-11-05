# Gunakan Node.js versi 18 (stabil dan didukung Railway)
FROM node:18

# Set direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json (kalau ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file project ke dalam container
COPY . .

# Build project NestJS
RUN npm run build

# Expose port 3000 (NestJS default)
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start:prod"]
