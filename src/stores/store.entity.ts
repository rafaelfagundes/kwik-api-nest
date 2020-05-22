import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Address } from '../adresses/address.entity';
import { City } from '../cities/city.entity';
import { Image } from '../images/image.entity';
import { Setting } from '../settings/setting.entity';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Store extends DefaultEntity {
  @Column()
  storeName: string;

  @Column()
  email: string;

  @Column()
  description: string;

  @Column()
  phoneNumber: string;

  @OneToOne(type => Image)
  @JoinColumn()
  banner: Image;

  @OneToOne(type => Image)
  @JoinColumn()
  logo: Image;

  @Column({ default: false })
  isOpen: boolean;

  @Column({ default: false })
  isDelivering: boolean;

  @Column({ default: false })
  isAcceptingPickUp: boolean;

  @Column('numeric')
  rating: number;

  @Column()
  likes: number;

  @OneToOne(type => Address)
  @JoinColumn()
  address: Address;

  @Column({ default: false })
  isEnabled: boolean;

  @Column({ default: false })
  isBlocked: boolean;

  @OneToOne(type => Setting)
  @JoinColumn()
  settings: Setting;

  @Column()
  numberOfRatings: number;

  @Column()
  predominantColor: string;

  @Column()
  backgroundColor: string;

  @OneToOne(type => City)
  @JoinColumn()
  city: City;
}
