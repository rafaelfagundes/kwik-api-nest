import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

@Entity()
export class Coupon extends DefaultEntity {
  @Column()
  couponCode: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  isPublic: boolean;

  @Column()
  termsOfUse: string;

  @Column()
  validUntil: Date;

  @Column('money')
  discountAmount: number;

  @Column()
  discountPercentage: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Store, { onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;
}
