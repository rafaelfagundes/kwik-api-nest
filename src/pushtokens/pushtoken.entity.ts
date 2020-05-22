import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

@Entity()
export class PushToken extends DefaultEntity {
  @Column({ nullable: false })
  pushToken: string;

  @Column({ default: true })
  isEnabled: boolean;

  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @OneToOne(type => Store, { onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;
}
