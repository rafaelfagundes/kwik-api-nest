import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

@Entity()
export class Coupon extends DefaultEntity {
  @Column({ nullable: false })
  couponCode: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ default: false })
  isPublic: boolean;

  @Column({ nullable: false })
  termsOfUse: string;

  @Column({ nullable: false })
  validUntil: Date;

  @Column('money')
  discountAmount: number;

  @Column()
  discountPercentage: number;

  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @OneToOne(type => Store, { onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;
}
