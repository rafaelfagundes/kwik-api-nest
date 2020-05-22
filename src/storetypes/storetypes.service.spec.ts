import { Test, TestingModule } from '@nestjs/testing';
import { StoretypesService } from './storetypes.service';

describe('StoretypesService', () => {
  let service: StoretypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoretypesService],
    }).compile();

    service = module.get<StoretypesService>(StoretypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
