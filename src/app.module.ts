import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersModule } from './users/users.module'; // DIKOMENTARI SEMENTARA: Aktifkan setelah UsersModule dibuat

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env', 
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule], 
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql', 
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT', '3306'), 10),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadModels: true, 
        synchronize: false, // EKSPLISIT DISET FALSE UNTUK KEAMANAN SAAT KONEKSI KE DB LIVE   
        logging: configService.get<string>('NODE_ENV') === 'development' ? console.log : false,
      }),
      inject: [ConfigService], 
    }),
    // UsersModule, // DIKOMENTARI SEMENTARA: Aktifkan setelah UsersModule dibuat dan dikonfigurasi dengan benar
  ],
  controllers: [AppController], 
  providers: [AppService],     
})
export class AppModule {}