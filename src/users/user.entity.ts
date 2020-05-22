import { Address } from 'src/adresses/address.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { City } from '../cities/city.entity';
import { Image } from '../images/image.entity';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';

@Entity()
export class User extends DefaultEntity {
  @Column({ default: false })
  firstName: string;

  @Column({ default: false })
  lastName: string;

  @Column({ default: false })
  email: string;

  @Column()
  phoneNumber: string;

  @Column('timestamptz')
  dateOfBirth: Date;

  @Column({ default: 'O' })
  gender: string;

  @OneToMany(
    type => Address,
    address => address.user,
    { eager: true, onDelete: 'CASCADE' },
  )
  adresses: Address[];

  @OneToOne(type => Store, { onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;

  @OneToOne(type => Image, { onDelete: 'CASCADE' })
  @JoinColumn()
  image: Image;

  @OneToOne(type => City, { onDelete: 'CASCADE' })
  @JoinColumn()
  selectedCity: City;
}
