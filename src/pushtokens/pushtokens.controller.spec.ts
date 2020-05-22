import { Test, TestingModule } from '@nestjs/testing';
import { PushtokensController } from './pushtokens.controller';

describe('Pushtokens Controller', () => {
  let controller: PushtokensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushtokensController],
    }).compile();

    controller = module.get<PushtokensController>(PushtokensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
