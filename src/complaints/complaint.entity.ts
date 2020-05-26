import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';

@Entity()
export class Complaint extends DefaultEntity {
  @ApiProperty()
  @Column('uuid')
  itemId: string;

  @ApiProperty()
  @Column()
  itemType: string;

  @ApiProperty()
  @Column()
  reason: string;

  @ApiPropertyOptional()
  @Column()
  message: string;

  @ApiProperty()
  @Column({ default: false })
  isRead: boolean;
}
