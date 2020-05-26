import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../users/user.repository';
import { AddressRepository } from './address.repository';
import { AdressesController } from './adresses.controller';
import { AdressesService } from './adresses.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AddressRepository]),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AdressesController],
  providers: [AdressesService],
})
export class AdressesModule {}
