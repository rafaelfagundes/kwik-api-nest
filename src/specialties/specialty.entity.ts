import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';

@Entity()
export class Specialty extends DefaultEntity {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  slug: string;

  @ManyToMany(type => Store)
  @JoinTable()
  stores: Store[];
}
