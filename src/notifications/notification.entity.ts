import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';

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

  @Column()
  body: string;

  @Column()
  title: string;

  @Column('jsonb')
  aditionalInfo: string;
}
