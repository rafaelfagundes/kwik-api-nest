import { EntityRepository, Repository } from 'typeorm';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';
import { CreateRatingDTO } from './dto/create-rating.dto';
import { Rating } from './rating.entity';

@EntityRepository(Rating)
export class RatingRepository extends Repository<Rating> {
  async createRating(
    createRatingDTO: CreateRatingDTO,
    user: User,
    store: Store,
  ): Promise<Rating> {
    const { title, text, reply, rating: ratingFromRequest } = createRatingDTO;

    const rating = new Rating();
    rating.title = title;
    rating.text = text;
    rating.reply = reply;
    rating.rating = ratingFromRequest;
    rating.store = store;
    rating.user = user;

    await rating.save();

    return rating;
  }
}
