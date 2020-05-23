import { Column, Entity, ManyToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';

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

  @ManyToOne(
    type => Store,
    store => store.storeTypes,
    { eager: false, onDelete: 'CASCADE' },
  )
  store: Store;
}
