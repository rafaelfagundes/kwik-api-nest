import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Catalog } from '../catalogs/catalog.entity';
import { Image } from '../images/image.entity';
import { Section } from '../sections/section.entity';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Product extends DefaultEntity {
  @Column({ default: true })
  isEnabled: boolean;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @OneToOne(type => Image)
  @JoinColumn()
  image: Image;

  @Column('jsonb', { nullable: false })
  options: string;

  @Column('jsonb', { nullable: false })
  discounts: string;

  @Column('jsonb', { nullable: false })
  addons: string;

  @Column('money', { default: 1 })
  price: number;

  @Column({ default: 0 })
  numberOfSold: number;

  @OneToOne(type => Section)
  @JoinColumn()
  section: Section;

  @ManyToOne(
    type => Catalog,
    catalog => catalog.addons,
    { eager: false, onDelete: 'CASCADE' },
  )
  catalog: Catalog;
}
