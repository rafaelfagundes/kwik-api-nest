import { ApiProperty } from '@nestjs/swagger';
import { IsBase64, IsEnum, IsNotEmpty } from 'class-validator';
import { ImageType } from '../imageType.enum';

export class CreateImageDTO {
  @ApiProperty()
  @IsBase64()
  @IsNotEmpty()
  base64: string;

  @ApiProperty({ enum: ImageType, default: ImageType.GENERAL })
  @IsEnum(ImageType)
  @IsNotEmpty()
  type: ImageType;
}
