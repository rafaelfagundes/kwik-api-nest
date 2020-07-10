import {
  Body,
  ConflictException,
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import * as firebaseAdmin from 'firebase-admin';
import { CreateUserDTO } from './dto/create-user.dto';
import { NewFirebaseUserDTO } from './dto/new-firebase-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiResponse({ type: User })
  async getUserByEmail(@Query('email') email: string): Promise<User> {
    return await this.usersService.getUserByEmail(email);
  }

  @Post()
  @ApiResponse({ type: User })
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    const logger = new Logger('@createUser');
    logger.log('/users/user-and-password');
    return await this.usersService.createUser(createUserDTO);
  }

  @Post('/user-and-password')
  @ApiResponse({ type: User })
  @UsePipes(ValidationPipe)
  async createUserWithEmailAndPassword(
    @Body() createUserDTO: CreateUserDTO,
  ): Promise<User> {
    const logger = new Logger('@createUserWithEmailAndPassword');
    logger.log('/users/user-and-password');

    const newUser = new NewFirebaseUserDTO(
      createUserDTO.email,
      false,
      createUserDTO.phoneNumber,
      createUserDTO.password,
      createUserDTO.firstName + ' ' + createUserDTO.lastName,
      false,
    );

    try {
      await firebaseAdmin.auth().createUser(newUser);
      return await this.usersService.createUser(createUserDTO);
    } catch (error) {
      if (error?.errorInfo?.code === 'auth/email-already-exists') {
        throw new ConflictException(
          'Este usuário já está cadastrado no sistema',
        );
      }

      throw new InternalServerErrorException();
    }
  }
}
