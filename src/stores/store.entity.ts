import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Address } from '../adresses/address.entity';
import { City } from '../cities/city.entity';
import { Image } from '../images/image.entity';
import { Setting } from '../settings/setting.entity';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Store extends DefaultEntity {
  @Column({ nullable: false })
  storeName: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  phoneNumber: string;

  @OneToOne(type => Image, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  banner: Image;

  @OneToOne(type => Image, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  logo: Image;

  @Column({ default: false })
  isOpen: boolean;

  @Column({ default: false })
  isDelivering: boolean;

  @Column({ default: false })
  isAcceptingPickUp: boolean;

  @Column('numeric', { default: 5 })
  rating: number;

  @Column({ default: 0 })
  likes: number;

  @OneToOne(type => Address, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  address: Address;

  @Column({ default: false })
  isEnabled: boolean;

  @Column({ default: false })
  isBlocked: boolean;

  @OneToOne(type => Setting, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  settings: Setting;

  @Column({ default: 0 })
  numberOfRatings: number;

  @Column({ default: '#000' })
  predominantColor: string;

  @Column({ default: '#EEE' })
  backgroundColor: string;

  @OneToOne(type => City, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  city: City;
}
