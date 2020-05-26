import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Addon } from '../addons/addon.entity';
import { Combo } from '../combos/combo.entity';
import { Product } from '../products/product.entity';
import { Section } from '../sections/section.entity';
import { DefaultEntity } from '../shared/default.entity';
import { Store } from '../stores/store.entity';

@Entity()
export class Catalog extends DefaultEntity {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => Store, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => Addon,
    addon => addon.catalog,
    { eager: true, onDelete: 'CASCADE' },
  )
  addons: Addon[];

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => Section,
    section => section.catalog,
    { eager: true, onDelete: 'CASCADE' },
  )
  sections: Section[];

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => Product,
    product => product.catalog,
    { eager: true, onDelete: 'CASCADE' },
  )
  products: Product[];

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => Combo,
    combo => combo.catalog,
    { eager: true, onDelete: 'CASCADE' },
  )
  combos: Combo[];
}
