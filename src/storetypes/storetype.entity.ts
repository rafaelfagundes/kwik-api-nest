import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class StoreType extends DefaultEntity {
  @Column({ nullable: false })
  title: string;

  @Column({ default: true })
  isEnabled: boolean;

  @Column({ default: 0 })
  listPosition: number;

  @Column({ nullable: false })
  slug: string;
}
