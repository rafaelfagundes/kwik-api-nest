import { Test, TestingModule } from '@nestjs/testing';
import { StoretypesController } from './storetypes.controller';

describe('Storetypes Controller', () => {
  let controller: StoretypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoretypesController],
    }).compile();

    controller = module.get<StoretypesController>(StoretypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
