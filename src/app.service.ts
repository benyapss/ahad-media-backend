import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    const appName = 'AHAD MEDIA DIGITAL Backend';
    const nodeEnv = this.configService.get<string>('NODE_ENV');
    return `Welcome to ${appName}! Running in ${nodeEnv} mode.`;
  }
}