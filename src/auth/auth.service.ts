/* eslint-disable @typescript-eslint/camelcase */
import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import Axios from 'axios';
import { OAuth2Client } from 'google-auth-library';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthCredentialsDTO } from './auth-credentials.dto';
import { AuthResultDto } from './auth-result.dto';
import { LoginType } from './login-type.enum';
require('dotenv').config();

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  private async checkFacebookAccessToken(token: string): Promise<boolean> {
    try {
      const url = 'https://graph.facebook.com/debug_token';
      const response = await Axios.get(url, {
        params: {
          input_token: token,
          access_token: `${process.env.FACEBOOK_APP_ID}|${process.env.FACEBOOK_APP_SECRET}`,
        },
      });

      const facebookAppIdResponse = response.data.data.app_id;
      const localFacebookAppId = process.env.FACEBOOK_APP_ID;

      if (facebookAppIdResponse === localFacebookAppId) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new InternalServerErrorException(
        'FATAL: Facebook token debug not working',
      );
    }
  }

  private async checkGoogleAccessToken(
    token: string,
    email: string,
  ): Promise<boolean> {
    console.log('token', token);
    try {
      const client_id = process.env.GOOGLE_CLIENT_ID;
      console.log('client_id', client_id);
      const client = new OAuth2Client(client_id);

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: client_id, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();

      console.log('payload', payload);

      if (payload.email === email) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new InternalServerErrorException(
        'FATAL: Google token debug not working',
      );
    }
  }

  private generateToken(user: User): string {
    const payload = {
      id: user.id,
      email: user.email,
    };
    const token = this.jwtService.sign(payload);
    return token;
  }

  async signIn(authCredentials: AuthCredentialsDTO): Promise<AuthResultDto> {
    let isValidUser = false;

    switch (authCredentials.type) {
      case LoginType.APPLE:
        throw new NotImplementedException();
      case LoginType.EMAIL:
        throw new NotImplementedException();
      case LoginType.FACEBOOK:
        isValidUser = await this.checkFacebookAccessToken(
          authCredentials.secret,
        );

        if (isValidUser) {
          const user = await this.usersService.getUserByEmail(
            authCredentials.email,
          );

          if (user) {
            const token = this.generateToken(user);
            return new AuthResultDto(user, token);
          }
        } else {
          throw new ForbiddenException();
        }
      case LoginType.GOOGLE:
        isValidUser = await this.checkGoogleAccessToken(
          authCredentials.secret,
          authCredentials.email,
        );

        if (isValidUser) {
          const user = await this.usersService.getUserByEmail(
            authCredentials.email,
          );

          if (user) {
            const token = this.generateToken(user);
            return new AuthResultDto(user, token);
          }
        } else {
          throw new ForbiddenException();
        }
        throw new NotImplementedException();
      default:
        return null;
    }
  }
}
