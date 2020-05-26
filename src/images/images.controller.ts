import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateImageDTO } from './dto/create-image.dto';
import { Image } from './image.entity';
import { ImagesService } from './images.service';

@ApiTags('images')
@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Post()
  @ApiCreatedResponse({ type: Image })
  @UsePipes(ValidationPipe)
  async createImage(@Body() createImageDTO: CreateImageDTO) {
    return await this.imagesService.createImage(createImageDTO);
  }
}
