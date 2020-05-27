import { Test, TestingModule } from '@nestjs/testing';
import { SpecialtiesController } from './specialties.controller';
import { SpecialtiesService } from './specialties.service';

describe('Specialties Controller', () => {
  let controller: SpecialtiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialtiesController],
      providers: [
        {
          provide: SpecialtiesService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<SpecialtiesController>(SpecialtiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
