import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreRepository } from '../stores/store.repository';
import { UserRepository } from '../users/user.repository';
import { RatingRepository } from './rating.repository';
import { RatingsController } from './ratings.controller';
import { RatingsService } from './ratings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RatingRepository,
      UserRepository,
      StoreRepository,
    ]),
  ],
  controllers: [RatingsController],
  providers: [RatingsService],
})
export class RatingsModule {}
