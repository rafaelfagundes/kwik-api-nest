import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

@Entity()
export class Rating extends DefaultEntity {
  @Column({ nullable: false })
  title: string;

  @Column()
  text: string;

  @Column()
  reply: string;

  @Column({ nullable: false })
  rating: string;

  @Column({ default: true })
  isApproved: boolean;

  @OneToOne(type => Store, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  store: Store;

  @OneToOne(type => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  user: User;
}
