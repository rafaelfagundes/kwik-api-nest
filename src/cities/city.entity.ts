import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class City extends DefaultEntity {
  @Column({ default: false })
  isEnabled: boolean;

  @Column({ nullable: false })
  cityName: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  stateInitials: string;

  @Column({ default: 0 })
  numberOfStores: number;
}
