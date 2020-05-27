import { Test, TestingModule } from '@nestjs/testing';
import { AdressesController } from './adresses.controller';
import { AdressesService } from './adresses.service';

describe('Adresses Controller', () => {
  let controller: AdressesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdressesController],
      providers: [
        {
          provide: AdressesService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AdressesController>(AdressesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
