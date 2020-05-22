import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class City extends DefaultEntity {
  @Column({ default: false })
  enabled: boolean;

  @Column()
  cityName: string;

  @Column()
  store: string;

  @Column()
  state: string;

  @Column()
  stateInitials: string;

  @Column({ default: 0 })
  numberOfStores: number;
}
