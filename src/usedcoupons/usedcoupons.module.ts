import { Module } from '@nestjs/common';
import { UsedcouponsController } from './usedcoupons.controller';
import { UsedcouponsService } from './usedcoupons.service';

@Module({
  controllers: [UsedcouponsController],
  providers: [UsedcouponsService]
})
export class UsedcouponsModule {}
