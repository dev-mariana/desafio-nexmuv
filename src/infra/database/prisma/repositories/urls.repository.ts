import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Url } from 'src/domain/entities/url';
import { IUrlsRepository } from 'src/domain/repositories/urls.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UrlsRepository implements IUrlsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(url: Partial<Prisma.UrlCreateInput>): Promise<Url> {
    const result = await this.prisma.url.create({
      data: {
        long_url: url.long_url,
        short_url: url.short_url,
        user_id: url?.user?.connect?.id || null,
      },
    });

    return {
      id: result.id,
      longUrl: result.long_url,
      shortUrl: result.short_url,
      userId: result.user_id,
      createdAt: result.created_at,
      updatedAt: result.updated_at,
    };
  }
}
