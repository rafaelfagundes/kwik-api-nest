import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class City extends DefaultEntity {
  @Column({ default: false })
  isEnabled: boolean;

  @Column()
  cityName: string;

  @Column()
  state: string;

  @Column()
  stateInitials: string;

  @Column({ default: 0 })
  numberOfStores: number;
}
