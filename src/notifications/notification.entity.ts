import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

enum NotificationType {
  CONFIRMED_ORDER = 'CONFIRMED_ORDER',
  DELIVERED = 'DELIVERED',
  EXPIRED = 'EXPIRED',
  GENERAL = 'GENERAL',
  IN_DELIVERY = 'IN_DELIVERY',
  NEW_ORDER = 'NEW_ORDER',
  ORDER_CANCELED_BY_STORE = 'ORDER_CANCELED_BY_STORE',
  ORDER_CANCELED_BY_USER = 'ORDER_CANCELED_BY_USER',
  RATING = 'RATING',
  RATING_REQUEST = 'RATING_REQUEST',
  READY_FOR_PICKUP = 'READY_FOR_PICKUP',
}

@Entity()
export class Notification extends DefaultEntity {
  @Column({ default: false })
  isRead: boolean;

  @Column({ default: NotificationType.GENERAL })
  notificationType: NotificationType;

  @Column()
  logo: string;

  @Column({ nullable: false })
  body: string;

  @Column({ nullable: false })
  title: string;

  @Column('jsonb')
  additionalInfo: string;

  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @OneToOne(type => Store, { onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;
}
