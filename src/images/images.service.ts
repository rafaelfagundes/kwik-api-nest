import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as cloudinary from 'cloudinary';
import cloudinaryConfig, {
  avatarOptions,
  bannerOptions,
  defaultOptions,
  logoOptions,
  productOptions,
} from '../config/cloudinary.config';
import { CreateImageDTO } from './dto/create-image.dto';
import { ImageDTO } from './dto/image.dto';
import { Image } from './image.entity';
import { ImageRepository } from './image.repository';
import { ImageType } from './imageType.enum';
cloudinary.v2.config(cloudinaryConfig);

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image) private imageRepository: ImageRepository,
  ) {}

  private async sendImageToCloudinary(
    base64: string,
    type: ImageType,
  ): Promise<cloudinary.UploadApiResponse> {
    switch (type) {
      case ImageType.GENERAL:
        return await cloudinary.v2.uploader.upload(
          `${defaultOptions.base64prefix}${base64}`,
          defaultOptions.options,
        );
      case ImageType.AVATAR:
        return await cloudinary.v2.uploader.upload(
          `${avatarOptions.base64prefix}${base64}`,
          avatarOptions.options,
        );
      case ImageType.BANNER:
        return await cloudinary.v2.uploader.upload(
          `${bannerOptions.base64prefix}${base64}`,
          bannerOptions.options,
        );
      case ImageType.LOGO:
        return await cloudinary.v2.uploader.upload(
          `${logoOptions.base64prefix}${base64}`,
          logoOptions.options,
        );
      case ImageType.PRODUCT:
        return await cloudinary.v2.uploader.upload(
          `${productOptions.base64prefix}${base64}`,
          productOptions.options,
        );
      default:
        break;
    }
  }

  async createImage(createImageDTO: CreateImageDTO) {
    const { base64, type } = createImageDTO;
    const image = await this.sendImageToCloudinary(base64, type);

    const imageDto = new ImageDTO();
    imageDto.diskSize = image.bytes;
    imageDto.externalId = image.public_id;
    imageDto.format = image.format;
    imageDto.height = image.height;
    imageDto.secureUrl = image.secure_url;
    imageDto.thumbnail = image.eager[0].secure_url;
    imageDto.type = type;
    imageDto.url = image.url;
    imageDto.width = image.width;

    return this.imageRepository.createImage(imageDto);
  }
}
