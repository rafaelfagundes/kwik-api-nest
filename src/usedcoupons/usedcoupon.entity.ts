import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { Coupon } from '../coupons/coupon.entity';
import { DefaultEntity } from '../shared/default.entity';
import { User } from '../users/user.entity';

@Entity()
export class UsedCoupon extends DefaultEntity {
  @OneToOne(type => Coupon, { onDelete: 'CASCADE' })
  @JoinColumn()
  coupon: Coupon;

  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
