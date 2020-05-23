import { Column, Entity, ManyToOne } from 'typeorm';
import { Catalog } from '../catalogs/catalog.entity';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Addon extends DefaultEntity {
  @Column({ nullable: false })
  title: string;

  @Column()
  description: string;

  @Column('money')
  price: number;

  @ManyToOne(
    type => Catalog,
    catalog => catalog.addons,
    { eager: false, onDelete: 'CASCADE' },
  )
  catalog: Catalog;
}
