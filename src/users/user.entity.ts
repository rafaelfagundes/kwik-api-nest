import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Address } from '../adresses/address.entity';
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

  @Column({ nullable: true })
  phoneNumber: string;

  @Column('timestamptz', { nullable: true })
  dateOfBirth: Date;

  @Column({ default: 'O' })
  gender: string;

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => Address,
    address => address.user,
    { eager: true, onDelete: 'CASCADE' },
  )
  adresses: Address[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Store, { onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Image, { onDelete: 'CASCADE' })
  @JoinColumn()
  image: Image;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => City, { onDelete: 'CASCADE' })
  @JoinColumn()
  selectedCity: City;
}
