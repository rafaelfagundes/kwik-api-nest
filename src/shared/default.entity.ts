import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class DefaultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamptz', { default: () => 'NOW()' })
  createdAt: Date;
}
