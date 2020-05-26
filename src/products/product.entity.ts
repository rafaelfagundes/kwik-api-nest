import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Catalog } from '../catalogs/catalog.entity';
import { Image } from '../images/image.entity';
import { Section } from '../sections/section.entity';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Product extends DefaultEntity {
  @Column({ default: true })
  isEnabled: boolean;

  @Column()
  title: string;

  @Column()
  description: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Image)
  @JoinColumn()
  image: Image;

  @Column('jsonb')
  options: string;

  @Column('jsonb')
  discounts: string;

  @Column('jsonb')
  addons: string;

  @Column('money', { default: 1 })
  price: number;

  @Column({ default: 0 })
  numberOfSold: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Section)
  @JoinColumn()
  section: Section;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => Catalog,
    catalog => catalog.addons,
    { eager: false, onDelete: 'CASCADE' },
  )
  catalog: Catalog;
}
