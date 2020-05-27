import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Address } from '../adresses/address.entity';
import { City } from '../cities/city.entity';
import { Image } from '../images/image.entity';
import { Setting } from '../settings/setting.entity';
import { DefaultEntity } from '../shared/default.entity';
import { StoreType } from '../storetypes/storetype.entity';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Image, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn()
  banner: Image;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Image, { onDelete: 'CASCADE', nullable: true })
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Address, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  address: Address;

  @Column({ default: false })
  isEnabled: boolean;

  @Column({ default: false })
  isBlocked: boolean;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Setting, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  settings: Setting;

  @Column({ default: 0 })
  numberOfRatings: number;

  @Column({ default: '#000' })
  predominantColor: string;

  @Column({ default: '#EEE' })
  backgroundColor: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => City, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  city: City;

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => StoreType,
    storeType => storeType.store,
    { eager: true, onDelete: 'CASCADE' },
  )
  storeTypes: StoreType[];
}
