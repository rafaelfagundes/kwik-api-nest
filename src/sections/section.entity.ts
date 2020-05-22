import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Catalog } from '../catalogs/catalog.entity';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Section extends DefaultEntity {
  @Column({ nullable: false })
  categoryName: string;

  @Column({ nullable: false })
  description: string;

  @OneToOne(type => Catalog, { onDelete: 'CASCADE' })
  @JoinColumn()
  catalog: Catalog;
}
