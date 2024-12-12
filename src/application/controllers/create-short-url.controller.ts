import { Body, Controller, Post } from '@nestjs/common';
import { CreateShortUrlService } from 'src/domain/services/create-short-url.service';
import { CreateShortUrlDto } from '../dto/create-short-url.dto';

@Controller('urls')
export class CreateShortUrlController {
  constructor(private readonly createShortUrlService: CreateShortUrlService) {}

  @Post()
  async create(@Body() dto: CreateShortUrlDto): Promise<{ short_url: string }> {
    const short_url = await this.createShortUrlService.execute(dto);

    return { short_url };
  }
}
