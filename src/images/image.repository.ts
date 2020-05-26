import { EntityRepository, Repository } from 'typeorm';
import { ImageDTO } from './dto/image.dto';
import { Image } from './image.entity';

@EntityRepository(Image)
export class ImageRepository extends Repository<Image> {
  async createImage(imageDTO: ImageDTO): Promise<Image> {
    const {
      type,
      url,
      isReviewed,
      isApproved,
      externalId,
      thumbnail,
      width,
      height,
      secureUrl,
      diskSize,
      format,
    } = imageDTO;

    const image = new Image();

    image.type = type;
    image.url = url;
    image.isReviewed = isReviewed;
    image.isApproved = isApproved;
    image.externalId = externalId;
    image.thumbnail = thumbnail;
    image.width = width;
    image.height = height;
    image.secureUrl = secureUrl;
    image.diskSize = diskSize;
    image.format = format;

    await image.save();
    return image;
  }
}
