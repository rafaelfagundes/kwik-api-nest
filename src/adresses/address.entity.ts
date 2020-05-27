import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import { User } from '../users/user.entity';

@Entity()
export class Address extends DefaultEntity {
  @ApiProperty()
  @Column()
  neighbourhood: string;

  @ApiProperty()
  @Column()
  zipCode: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  complement: string;

  @ApiProperty()
  @Column()
  city: string;

  @ApiProperty()
  @Column()
  street: string;

  @ApiProperty()
  @Column()
  houseNumber: number;

  @ApiProperty()
  @Column()
  state: string;

  @ApiProperty()
  @Column({ nullable: true })
  latitude: string;

  @ApiProperty()
  @Column({ nullable: true })
  longitude: string;

  @ApiPropertyOptional()
  @Column()
  title: string;

  @ApiPropertyOptional({ type: () => User })
  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => User,
    user => user.adresses,
    { eager: false, onDelete: 'CASCADE', nullable: true },
  )
  user: User;

  @ApiProperty()
  @Column({ default: true })
  isDefault: boolean;
}
