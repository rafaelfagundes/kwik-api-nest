import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

@Entity()
export class Favorite extends DefaultEntity {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Store, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;
}
