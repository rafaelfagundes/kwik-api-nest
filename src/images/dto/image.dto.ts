import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
} from 'class-validator';
import { ImageType } from '../imageType.enum';

export class ImageDTO {
  @ApiProperty()
  @IsEnum(ImageType)
  @IsNotEmpty()
  type: ImageType;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  isReviewed: boolean;

  @ApiProperty({ default: true })
  @IsBoolean()
  isApproved: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  externalId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  thumbnail: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  width: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  height: number;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  secureUrl: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  diskSize: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  format: string;
}
