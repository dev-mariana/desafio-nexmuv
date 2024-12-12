import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateShortUrlDto {
  @IsNotEmpty()
  @IsString()
  long_url: string;

  @IsOptional()
  @IsString()
  user_id?: string;
}
