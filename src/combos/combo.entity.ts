import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Catalog } from '../catalogs/catalog.entity';
import { Image } from '../images/image.entity';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Combo extends DefaultEntity {
  @Column({ default: true })
  isEnabled: boolean;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('money')
  price: number;

  @Column('jsonb')
  addons: string;

  @Column('jsonb')
  discounts: string;

  @Column('jsonb')
  items: string;

  @Column({ default: 0 })
  numberOfSold: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Image)
  @JoinColumn()
  image: Image;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => Catalog,
    catalog => catalog.addons,
    { eager: false, onDelete: 'CASCADE' },
  )
  catalog: Catalog;
}
