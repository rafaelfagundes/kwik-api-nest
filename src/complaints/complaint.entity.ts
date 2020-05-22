import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Complaint extends DefaultEntity {
  @Column('uuid')
  itemId: string;

  @Column()
  itemType: string;

  @Column()
  reason: string;

  @Column()
  message: string;

  @Column({ default: false })
  isRead: boolean;
}
