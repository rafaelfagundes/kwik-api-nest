import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

@Entity()
export class Favorite extends DefaultEntity {
  @OneToOne(type => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @OneToOne(type => Store, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;
}
