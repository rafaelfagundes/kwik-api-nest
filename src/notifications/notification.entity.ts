import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';
import NotificationType from './notificationtype.enum';

@Entity()
export class Notification extends DefaultEntity {
  @ApiProperty()
  @Column({ default: false })
  isRead: boolean;

  @ApiProperty()
  @Column({ default: NotificationType.GENERAL })
  notificationType: NotificationType;

  @ApiProperty()
  @Column({ nullable: true })
  logo: string;

  @ApiProperty()
  @Column()
  body: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column('jsonb', { nullable: true })
  additionalInfo: string;

  @ApiProperty()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @ApiProperty()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Store, { onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;
}
