import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';
import Status from './status.enum';

@Entity()
export class Order extends DefaultEntity {
  @Column({ nullable: false })
  friendlyId: string;

  @Column('jsonb', { nullable: false })
  userDataOnOrder: string;

  @Column({ default: Status.OPEN })
  status: Status;

  @Column({ nullable: false })
  paymentType: string;

  @Column({ nullable: false })
  deliveryType: string;

  @Column('jsonb', { nullable: false })
  items: string;

  @Column({ nullable: false })
  orderShortDescription: string;

  @Column('money', { default: 1 })
  deliveryFee: number;

  @Column('money', { default: 1 })
  itemsValue: number;

  @Column('money', { default: 1 })
  finalPrice: number;

  @Column({ default: 0 })
  discountAmount: number;

  @Column()
  coupon: string;

  @Column()
  postScriptum: string;

  @Column('timestamptz')
  confirmationDate: Date;

  @Column('timestamptz')
  orderDoneDate: Date;

  @Column('timestamptz')
  deliveredDate: Date;

  @Column('timestamptz')
  cancelationDate: Date;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;

  @OneToOne(type => Store)
  @JoinColumn()
  store: Store;
}
