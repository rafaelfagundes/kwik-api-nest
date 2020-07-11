import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';

export class AuthResultDto {
  @ApiProperty()
  user: User;

  @ApiProperty()
  token: string;

  constructor(user: User, token: string) {
    this.user = user;
    this.token = token;
  }
}
