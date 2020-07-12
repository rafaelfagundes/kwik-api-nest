import {
  Body,
  ConflictException,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
  @UseGuards(AuthGuard())
  @ApiResponse({ type: User })
  async getUser(@Req() req: any) {
    return await req.user;
  }

  @Post()
  @ApiResponse({ type: User })
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return await this.usersService.createUser(createUserDTO);
  }

  @Post('/user-and-password')
  @ApiResponse({ type: User })
  @UsePipes(ValidationPipe)
  async createUserWithEmailAndPassword(
    @Body() createUserDTO: CreateUserDTO,
  ): Promise<User> {
    const newUser = new NewFirebaseUserDTO(
      createUserDTO.email,
      false,
      createUserDTO.phoneNumber,
      createUserDTO.password,
      createUserDTO.firstName + ' ' + createUserDTO.lastName,
      false,
    );

    try {
      const response = await this.usersService.getUserByEmail(
        createUserDTO.email,
      );
      if (response) {
        throw new ConflictException(
          'Este usuário já está cadastrado no sistema',
        );
      } else {
        await firebaseAdmin.auth().createUser(newUser);
        return await this.usersService.createUser(createUserDTO);
      }
    } catch (error) {
      console.log('error', error);
      if (error?.errorInfo?.code === 'auth/email-already-exists') {
        throw new ConflictException(
          'Este usuário já está cadastrado no sistema',
        );
      } else if (error?.status === 409) {
        throw new ConflictException(error.response.message);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
