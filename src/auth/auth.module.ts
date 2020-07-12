import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityRepository } from '../cities/city.repository';
import { ImageRepository } from '../images/image.repository';
import { StoreRepository } from '../stores/store.repository';
import { UserRepository } from '../users/user.repository';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
require('dotenv').config();

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '180d',
      },
    }),
    TypeOrmModule.forFeature([
      UserRepository,
      StoreRepository,
      ImageRepository,
      CityRepository,
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
