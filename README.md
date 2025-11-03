# AHAD MEDIA DIGITAL - Backend

Backend API untuk aplikasi AHAD MEDIA DIGITAL. Dibangun menggunakan NestJS.

## Deskripsi

Proyek ini menyediakan endpoint API yang dibutuhkan oleh aplikasi frontend AHAD MEDIA DIGITAL, termasuk autentikasi, manajemen konten (layanan, blog, testimoni, dll.).

## Instalasi

1.  Kloning repositori (jika ada):
    \`\`\`bash
    git clone <url_repository_anda>
    cd ahad-media-backend
    \`\`\`
2.  Instal dependensi:
    \`\`\`bash
    npm install
    \`\`\`
3.  Buat file \`.env\` di root direktori. Isi dengan kredensial database dan konfigurasi lainnya. Contoh:
    \`\`\`env
    # Server Configuration
    PORT=3000
    NODE_ENV=development

    # Database Configuration (MySQL)
    DB_DIALECT=mysql
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=username_db_anda
    DB_PASSWORD=password_db_anda
    DB_DATABASE=nama_database_anda

    # JWT Configuration
    JWT_SECRET=kunci_rahasia_jwt_anda_yang_panjang
    JWT_EXPIRATION_TIME=3600s
    \`\`\`

## Menjalankan Aplikasi

\`\`\`bash
# Mode pengembangan (dengan hot-reload)
npm run start:dev

# Mode produksi
# npm run build
# npm run start:prod
\`\`\`

Pastikan MySQL server Anda berjalan dan database telah dibuat sebelum menjalankan aplikasi.
Opsi \`synchronize: true\` pada konfigurasi Sequelize (di \`app.module.ts\`) akan otomatis membuat tabel berdasarkan model saat mode pengembangan. Untuk produksi, gunakan migrasi.
