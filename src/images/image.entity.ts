import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Image extends DefaultEntity {
  @Column()
  url: string;

  @Column({ default: false })
  isReviewed: boolean;

  @Column({ default: true })
  isApproved: boolean;

  @Column()
  externalId: string;

  @Column()
  thumbnail: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  secureUrl: string;

  @Column('numeric')
  diskSize: number;

  @Column()
  format: string;
}
