import { Address } from 'src/adresses/address.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class User extends DefaultEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
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
    { eager: true },
  )
  adresses: Address[];
}
