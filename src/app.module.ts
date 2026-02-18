import { Module } from '@nestjs/common';
import { VerifyModule } from './verify/verify.module';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ['.env'],
    }),
    VerifyModule,
  ],
})
export class AppModule {}
