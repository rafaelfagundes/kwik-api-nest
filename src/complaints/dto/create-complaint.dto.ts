import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { ItemType } from '../itemtype.enum';

export class CreateComplaintDTO {
  @ApiProperty()
  @IsUUID()
  itemId: string;

  @ApiProperty({
    enum: ItemType,
    default: ItemType.GENERAL,
  })
  @IsEnum({
    enum: ItemType,
    default: ItemType.GENERAL,
  })
  itemType: string;

  @ApiProperty()
  @IsNotEmpty()
  reason: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsOptional()
  message: string;

  @ApiProperty({
    default: false,
  })
  @IsBoolean()
  isRead: boolean;
}
