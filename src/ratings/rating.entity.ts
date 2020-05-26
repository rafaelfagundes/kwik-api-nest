import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

@Entity()
export class Rating extends DefaultEntity {
  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  reply: string;

  @Column()
  rating: string;

  @Column({ default: true })
  isApproved: boolean;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Store, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  store: Store;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  user: User;
}
