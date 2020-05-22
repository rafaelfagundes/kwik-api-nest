import { Test, TestingModule } from '@nestjs/testing';
import { UsedcouponsController } from './usedcoupons.controller';

describe('Usedcoupons Controller', () => {
  let controller: UsedcouponsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsedcouponsController],
    }).compile();

    controller = module.get<UsedcouponsController>(UsedcouponsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
