import { Test, TestingModule } from '@nestjs/testing';
import { CombosController } from './combos.controller';
import { CombosService } from './combos.service';

describe('Combos Controller', () => {
  let controller: CombosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CombosController],
      providers: [
        {
          provide: CombosService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CombosController>(CombosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
