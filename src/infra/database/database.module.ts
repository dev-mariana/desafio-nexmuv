import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UrlRepository } from './prisma/repositories/url.repository';

@Module({
  providers: [PrismaService, UrlRepository],
  exports: [UrlRepository],
})
export class DatabaseModule {}
