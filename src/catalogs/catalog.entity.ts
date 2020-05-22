import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';

@Entity()
export class Catalog extends DefaultEntity {
  @OneToOne(type => Store, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;
}
