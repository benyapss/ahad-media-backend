import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Root path controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Handles GET requests to the root path (e.g., http://localhost:3000/)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health') // Contoh endpoint untuk health check
  healthCheck(): { status: string; message: string; timestamp: string } {
    return {
      status: 'UP',
      message: 'Backend AHAD MEDIA DIGITAL is healthy!',
      timestamp: new Date().toISOString(),
    };
  }
}