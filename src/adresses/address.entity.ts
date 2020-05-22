import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from "../stores/store.entity";
import { User } from '../users/user.entity';

@Entity()
export class Address extends DefaultEntity {
  @Column()
  neighborhood: string;

  @Column()
  zipCode: string;

  @Column()
  complement: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  houseNumber: number;

  @Column()
  state: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  title: string;

  @ManyToOne(
    type => User,
    user => user.adresses,
    { eager: false },
  )
  user: User;

  @OneToOne({
    type=>Store
  })
  @JoinColumn()
  store: Store;

  @Column({ default: true })
  isDefault: boolean;
}
