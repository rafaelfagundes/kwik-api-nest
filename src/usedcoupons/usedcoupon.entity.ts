import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { Coupon } from '../coupons/coupon.entity';
import { DefaultEntity } from '../shared/default.entity';
import { User } from '../users/user.entity';

@Entity()
export class UsedCoupon extends DefaultEntity {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Coupon, { onDelete: 'CASCADE' })
  @JoinColumn()
  coupon: Coupon;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
