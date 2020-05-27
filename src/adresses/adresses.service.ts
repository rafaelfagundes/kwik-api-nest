import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../users/user.repository';
import { Address } from './address.entity';
import { AddressRepository } from './address.repository';
import { CreateAddressDTO } from './dto/create-address.dto';

@Injectable()
export class AdressesService {
  constructor(
    @InjectRepository(AddressRepository)
    private addressRepository: AddressRepository,

    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
  async createAddress(createAddressDTO: CreateAddressDTO): Promise<Address> {
    const user = await this.userRepository.findOne(createAddressDTO.user);
    if (!user) throw new NotFoundException('User not find');

    return await this.addressRepository.createAddress(createAddressDTO, user);
  }
}
