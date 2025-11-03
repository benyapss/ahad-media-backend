import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common'; // Untuk validasi DTO global

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT') || 3000; // Ambil port dari .env, default 3000

  // D:\amd\ahad-media-backend\src\main.ts
// ...
app.enableCors({
  origin: 'https://ahadmedia.com', // GANTI DENGAN URL FRONTEND LIVE ANDA
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
});
// ...

  // Atur prefix global untuk semua API endpoint (opsional)
  // Contoh: semua endpoint akan menjadi /api/v1/...
  // app.setGlobalPrefix('api/v1');

  // Aktifkan ValidationPipe secara global untuk validasi DTO
  // Ini akan menggunakan class-validator dan class-transformer
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Membuang properti yang tidak ada di DTO
      forbidNonWhitelisted: true, // Melemparkan error jika ada properti yang tidak di-whitelist
      transform: true, // Otomatis mengubah payload menjadi instance DTO
      transformOptions: {
        enableImplicitConversion: true, // Memungkinkan konversi tipe implisit (mis. string dari query param ke number)
      },
    }),
  );

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Current NODE_ENV: ${configService.get<string>('NODE_ENV')}`);
}
bootstrap();