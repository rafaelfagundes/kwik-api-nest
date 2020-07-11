import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { LoginType } from './login-type.enum';

export class AuthCredentialsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  secret: string;

  @ApiProperty()
  @IsNotEmpty()
  type: LoginType;
}
