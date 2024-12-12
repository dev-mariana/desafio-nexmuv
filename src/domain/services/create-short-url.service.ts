import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { CreateShortUrlDto } from 'src/application/dto/create-short-url.dto';
import { UrlsRepository } from 'src/infra/database/prisma/repositories/urls.repository';

@Injectable()
export class CreateShortUrlService {
  constructor(private readonly urlsRepository: UrlsRepository) {}

  async execute(dto: CreateShortUrlDto): Promise<string> {
    const { long_url, user_id } = dto;
    const generatedShortUrl = nanoid(6);
    const { BASE_URL } = process.env;

    const data = {
      long_url,
      short_url: `${BASE_URL}/${generatedShortUrl}`,
      user_id: user_id || null,
    };

    const { shortUrl } = await this.urlsRepository.save(data);

    return shortUrl;
  }
}
