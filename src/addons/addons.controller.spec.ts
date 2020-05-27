import { Test, TestingModule } from '@nestjs/testing';
import { AddonsController } from './addons.controller';
import { AddonsService } from './addons.service';

describe('Addons Controller', () => {
  let controller: AddonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddonsController],
      providers: [
        {
          provide: AddonsService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AddonsController>(AddonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
