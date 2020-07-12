import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '../cities/city.entity';
import { CityRepository } from '../cities/city.repository';
import { Image } from '../images/image.entity';
import { ImageRepository } from '../images/image.repository';
import { Store } from '../stores/store.entity';
import { StoreRepository } from '../stores/store.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: UserRepository,
    @InjectRepository(Store) private storeRepository: StoreRepository,
    @InjectRepository(Image) private imageRepository: ImageRepository,
    @InjectRepository(City) private cityRepository: CityRepository,
  ) {}

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ email: email });
    if (!user) return null;
    return user;
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    let store = null;
    let image = null;
    let city = null;

    if (createUserDTO.storeId) {
      store = await this.storeRepository.findOne(createUserDTO.storeId);
    }

    if (createUserDTO.imageId) {
      image = await this.imageRepository.findOne(createUserDTO.imageId);
    }

    if (createUserDTO.selectedCityId) {
      city = await this.cityRepository.findOne(createUserDTO.selectedCityId);
    }
    const user = await this.userRepository.createUser(
      createUserDTO,
      store,
      image,
      city,
    );
    return user;
  }
}
