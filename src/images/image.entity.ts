import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { ImageType } from './imageType.enum';

@Entity()
export class Image extends DefaultEntity {
  @ApiProperty()
  @Column({ default: ImageType.GENERAL })
  type: ImageType;

  @ApiProperty()
  @Column({ nullable: true })
  url: string;

  @ApiProperty()
  @Column({ default: false })
  isReviewed: boolean;

  @ApiProperty()
  @Column({ default: true })
  isApproved: boolean;

  @ApiProperty()
  @Column()
  externalId: string;

  @ApiProperty()
  @Column()
  thumbnail: string;

  @ApiProperty()
  @Column({ nullable: true })
  width: number;

  @ApiProperty()
  @Column({ nullable: true })
  height: number;

  @ApiProperty()
  @Column({ nullable: true })
  secureUrl: string;

  @ApiProperty()
  @Column('numeric', { nullable: true })
  diskSize: number;

  @ApiProperty()
  @Column({ nullable: true })
  format: string;
}
