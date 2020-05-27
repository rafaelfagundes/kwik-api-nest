import { Test, TestingModule } from '@nestjs/testing';
import { PushtokensController } from './pushtokens.controller';
import { PushtokensService } from './pushtokens.service';

describe('Pushtokens Controller', () => {
  let controller: PushtokensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushtokensController],
      providers: [
        {
          provide: PushtokensService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PushtokensController>(PushtokensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
