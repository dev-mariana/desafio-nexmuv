import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CreateShortUrlService } from 'src/domain/services/create-short-url.service';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateShortUrlController } from './controllers/create-short-url.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [CreateShortUrlController],
  providers: [CreateShortUrlService, ConfigService],
  exports: [CreateShortUrlService, ConfigService],
})
export class ApplicationModule {}
