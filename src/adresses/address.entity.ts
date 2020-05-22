import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

@Entity()
export class Address extends DefaultEntity {
  @Column({ nullable: false })
  neighborhood: string;

  @Column({ nullable: false })
  zipCode: string;

  @Column()
  complement: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
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
    { eager: false, onDelete: 'CASCADE' },
  )
  user: User;

  @OneToOne(type => Store, { onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;

  @Column({ default: true })
  isDefault: boolean;
}
