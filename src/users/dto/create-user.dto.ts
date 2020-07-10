import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { Gender } from '../gender.enum';

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsOptional()
  password: string;

  @ApiProperty()
  @IsPhoneNumber('BR')
  @IsOptional()
  phoneNumber: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  dateOfBirth: Date;

  @ApiProperty({ enum: Gender, default: Gender.OTHER })
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  storeId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  imageId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  selectedCityId: string;
}
