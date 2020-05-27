import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateRatingDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  reply: string;

  @ApiProperty({ default: 1.0 })
  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @ApiProperty()
  @IsUUID()
  store: string;

  @ApiProperty()
  @IsUUID()
  user: string;
}
