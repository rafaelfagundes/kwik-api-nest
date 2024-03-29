import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../shared/default.entity';
import DeliveryFeeType from './deliveryfeetype.enum';
import OperationHoursType from './operationhourstype.enum';

@Entity()
export class Setting extends DefaultEntity {
  @Column({ default: 15 })
  deliveryTime: number;

  @Column({ default: 10 })
  withdrawalTime: number;

  @Column('money', { default: 10 })
  minimumOrderValue: number;

  @Column({ default: OperationHoursType.ALWAYS_OPEN })
  operationHoursType: OperationHoursType;

  @Column('jsonb', { nullable: true })
  operationTimetable: string;

  @Column({ default: true })
  acceptsCoupon: boolean;

  @Column({ default: true })
  acceptsMoney: boolean;

  @Column({ default: true })
  acceptsDebitCard: boolean;

  @Column({ default: true })
  acceptsCreditCard: boolean;

  @Column('jsonb', { nullable: true })
  listOfAcceptedCards: string;

  @Column({ default: DeliveryFeeType.FREE })
  deliveryFeeType: DeliveryFeeType;

  @Column('jsonb', { nullable: true })
  deliveryFeeList: string;

  @Column('money', { nullable: true })
  deliverySingleFee: number;
}
