import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';
import NotificationType from './notificationtype.enum';

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
