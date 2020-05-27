import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreRepository } from '../stores/store.repository';
import { UserRepository } from '../users/user.repository';
import { CreateRatingDTO } from './dto/create-rating.dto';
import { UpdateRatingDTO } from './dto/update-rating.dto';
import { Rating } from './rating.entity';
import { RatingRepository } from './rating.repository';

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: RatingRepository,

    @InjectRepository(UserRepository)
    private userRepository: UserRepository,

    @InjectRepository(StoreRepository)
    private storeRepository: StoreRepository,
  ) {}

  async getRating(id: string): Promise<Rating> {
    const rating = await this.ratingRepository.findOne(id);
    if (!rating) throw new NotFoundException('Rating not found');
    return rating;
  }

  async createRating(createRatingDTO: CreateRatingDTO): Promise<Rating> {
    let user = null;
    let store = null;

    if (createRatingDTO.user) {
      user = await this.userRepository.findOne(createRatingDTO.user);
    }
    if (createRatingDTO.user) {
      store = await this.storeRepository.findOne(createRatingDTO.store);
    }

    if (!user || !store) {
      throw new BadRequestException('User ID e/or Store ID not sent');
    }

    return await this.ratingRepository.createRating(
      createRatingDTO,
      user,
      store,
    );
  }

  async updateRating(
    id: string,
    updateRatingDTO: UpdateRatingDTO,
  ): Promise<Rating> {
    const rating = await this.ratingRepository.findOne(id);
    if (!rating) {
      throw new NotFoundException('Rating not found');
    }

    const { rating: ratingFromRequest, title, text, reply } = updateRatingDTO;

    if (ratingFromRequest) {
      rating.rating = ratingFromRequest;
    }
    if (title) {
      rating.title = title;
    }
    if (text) {
      rating.text = reply;
    }
    if (reply) {
      rating.reply = text;
    }
    await rating.save();
    return rating;
  }
}
