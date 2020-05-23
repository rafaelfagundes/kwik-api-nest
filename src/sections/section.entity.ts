import { Column, Entity, ManyToOne } from 'typeorm';
import { Catalog } from '../catalogs/catalog.entity';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Section extends DefaultEntity {
  @Column({ nullable: false })
  categoryName: string;

  @Column({ nullable: false })
  description: string;

  @ManyToOne(
    type => Catalog,
    catalog => catalog.addons,
    { eager: false, onDelete: 'CASCADE' },
  )
  catalog: Catalog;
}
