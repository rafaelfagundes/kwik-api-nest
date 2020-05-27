import { Test, TestingModule } from '@nestjs/testing';
import { StoretypesController } from './storetypes.controller';
import { StoretypesService } from './storetypes.service';

describe('Storetypes Controller', () => {
  let controller: StoretypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoretypesController],
      providers: [
        {
          provide: StoretypesService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<StoretypesController>(StoretypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
