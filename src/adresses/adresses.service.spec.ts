import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Address } from './address.entity';
import { AdressesService } from './adresses.service';

describe('AdressesService', () => {
  let service: AdressesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdressesService,
        {
          provide: getRepositoryToken(Address),
          useValue: {},
        },
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<AdressesService>(AdressesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
