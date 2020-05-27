import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';

@Entity()
@Unique(['store', 'user'])
export class Rating extends DefaultEntity {
  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  text: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  reply: string;

  @ApiProperty()
  @Column('numeric')
  rating: number;

  @ApiProperty()
  @Column({ default: true })
  isApproved: boolean;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Store, { onDelete: 'CASCADE', nullable: false })
  store: Store;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => User, { onDelete: 'CASCADE', nullable: false })
  user: User;
}
