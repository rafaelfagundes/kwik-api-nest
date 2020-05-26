import { EntityRepository, Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Address } from './address.entity';
import { CreateAddressDTO } from './dto/create-address.dto';

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {
  async createAddress(
    createAddressDTO: CreateAddressDTO,
    user: User,
  ): Promise<Address> {
    const {
      neighbourhood,
      zipCode,
      complement,
      city,
      street,
      houseNumber,
      state,
      latitude,
      longitude,
      title,
      isDefault,
    } = createAddressDTO;

    const address = new Address();
    address.neighbourhood = neighbourhood;
    address.zipCode = zipCode;
    address.complement = complement;
    address.city = city;
    address.street = street;
    address.houseNumber = houseNumber;
    address.state = state;
    address.latitude = latitude;
    address.longitude = longitude;
    address.title = title;
    address.user = user;
    address.isDefault = isDefault;

    await address.save();
    return address;
  }
}
