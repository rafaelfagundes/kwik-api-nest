import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';
import { RatingRepository } from './rating.repository';
import { RatingsService } from './ratings.service';

const mockRatingRepository = () => ({
  findOne: jest.fn(),
});

describe('RatingsService', () => {
  let service: RatingsService;
  let ratingRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RatingsService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
        {
          provide: RatingRepository,
          useFactory: mockRatingRepository,
        },
        {
          provide: getRepositoryToken(Store),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<RatingsService>(RatingsService);
    ratingRepository = module.get<RatingRepository>(RatingRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getRatings', () => {
    it('should retrieve a new rating', async () => {
      const mockRating = {
        title: 'Very nice meal',
        text: 'I will buy again for sure',
      };
      ratingRepository.findOne.mockResolvedValue(mockRating);

      const result = await service.getRating('X');
      expect(result).toEqual(mockRating);

      expect(ratingRepository.findOne).toHaveBeenCalledWith('X');
    });

    it('should throw an exception if the rating is not found ', async () => {
      ratingRepository.findOne.mockResolvedValue(null);
      expect(service.getRating('X')).rejects.toThrow();
    });
  });
});
