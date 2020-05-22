import { Column, Entity, OneToOne } from 'typeorm';
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

  @OneToOne(type => Catalog)
  catalog: Catalog;
}
