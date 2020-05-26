import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

@Entity()
export class PushToken extends DefaultEntity {
  @Column()
  pushToken: string;

  @Column({ default: true })
  isEnabled: boolean;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Store, { onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;
}
