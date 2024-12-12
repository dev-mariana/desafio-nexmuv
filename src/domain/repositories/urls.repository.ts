import { Prisma } from '@prisma/client';
import { Url } from '../entities/url';

export interface IUrlsRepository {
  save(url: Partial<Prisma.UrlCreateInput>): Promise<Url>;
}
