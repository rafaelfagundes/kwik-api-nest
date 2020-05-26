import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  ValidateIf,
} from 'class-validator';
import NotificationType from '../notificationtype.enum';

export class CreateNotificationDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  logo: string;

  @ApiProperty({
    enum: NotificationType,
    default: NotificationType.GENERAL,
    required: false,
  })
  @IsOptional()
  @IsEnum({
    enum: NotificationType,
    default: NotificationType.GENERAL,
  })
  notificationType: NotificationType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsJSON()
  additionalInfo: string;

  @ValidateIf(o => !o.storeId, { message: 'User ID or Store ID is required' })
  @ApiProperty()
  @IsUUID()
  userId: string;

  @ValidateIf(o => !o.userId, { message: 'User ID or Store ID is required' })
  @ApiProperty()
  @IsUUID()
  storeId: string;
}
