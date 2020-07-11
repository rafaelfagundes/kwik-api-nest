import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthCredentialsDTO } from './auth-credentials.dto';
import { AuthResultDto } from './auth-result.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-in')
  @ApiResponse({ type: AuthResultDto })
  async signIn(
    @Body() authCredentials: AuthCredentialsDTO,
  ): Promise<AuthResultDto> {
    return this.authService.signIn(authCredentials);
  }
}
