import { Test, TestingModule } from '@nestjs/testing';
import { PushtokensService } from './pushtokens.service';

describe('PushtokensService', () => {
  let service: PushtokensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PushtokensService],
    }).compile();

    service = module.get<PushtokensService>(PushtokensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
