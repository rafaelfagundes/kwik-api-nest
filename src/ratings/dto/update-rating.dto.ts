import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class UpdateRatingDTO {
  @ApiPropertyOptional({ default: 1 })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  rating: number;

  @ApiPropertyOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional()
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiPropertyOptional()
  @IsString()
  @IsNotEmpty()
  reply: string;
}
