import { Test, TestingModule } from '@nestjs/testing';
import { UsedcouponsService } from './usedcoupons.service';

describe('UsedcouponsService', () => {
  let service: UsedcouponsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsedcouponsService],
    }).compile();

    service = module.get<UsedcouponsService>(UsedcouponsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
