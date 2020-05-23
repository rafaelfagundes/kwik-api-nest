import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Catalog } from '../catalogs/catalog.entity';
import { Image } from '../images/image.entity';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Combo extends DefaultEntity {
  @Column({ default: true })
  isEnabled: boolean;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column('money', { nullable: false })
  price: number;

  @Column('jsonb')
  addons: string;

  @Column('jsonb')
  discounts: string;

  @Column('jsonb', { nullable: false })
  items: string;

  @Column({ default: 0 })
  numberOfSold: number;

  @OneToOne(type => Image)
  @JoinColumn()
  image: Image;

  @ManyToOne(
    type => Catalog,
    catalog => catalog.addons,
    { eager: false, onDelete: 'CASCADE' },
  )
  catalog: Catalog;
}
