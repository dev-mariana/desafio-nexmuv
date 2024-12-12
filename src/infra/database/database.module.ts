import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UrlsRepository } from './prisma/repositories/urls.repository';

@Module({
  providers: [PrismaService, UrlsRepository],
  exports: [PrismaService, UrlsRepository],
})
export class DatabaseModule {}
