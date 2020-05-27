import { Test, TestingModule } from '@nestjs/testing';
import { UsedcouponsController } from './usedcoupons.controller';
import { UsedcouponsService } from './usedcoupons.service';

describe('Usedcoupons Controller', () => {
  let controller: UsedcouponsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsedcouponsController],
      providers: [
        {
          provide: UsedcouponsService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UsedcouponsController>(UsedcouponsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
