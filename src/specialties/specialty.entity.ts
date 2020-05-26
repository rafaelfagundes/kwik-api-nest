import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';

@Entity()
export class Specialty extends DefaultEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany(type => Store)
  @JoinTable()
  stores: Store[];
}
