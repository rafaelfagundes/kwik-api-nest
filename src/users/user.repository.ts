import { EntityRepository, Repository } from 'typeorm';
import { City } from '../cities/city.entity';
import { Image } from '../images/image.entity';
import { Store } from '../stores/store.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(
    createUserDTO: CreateUserDTO,
    store: Store,
    image: Image,
    selectedCity: City,
  ): Promise<User> {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      gender,
    } = createUserDTO;
    const user = new User();

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.dateOfBirth = dateOfBirth;
    user.gender = gender;
    user.store = store;
    user.image = image;
    user.selectedCity = selectedCity;

    await user.save();

    return user;
  }
}
