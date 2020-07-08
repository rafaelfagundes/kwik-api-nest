import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRatingDTO } from './dto/create-rating.dto';
import { UpdateRatingDTO } from './dto/update-rating.dto';
import { Rating } from './rating.entity';
import { RatingsService } from './ratings.service';

@ApiTags('ratings')
@Controller('ratings')
export class RatingsController {
  constructor(private ratingsService: RatingsService) {}

  @Get()
  @ApiResponse({ type: Rating })
  async getRating(@Query('id') id: string): Promise<Rating> {
    return await this.ratingsService.getRating(id);
  }

  @Post()
  @ApiResponse({ type: Rating })
  @UsePipes(ValidationPipe)
  async createRating(
    @Body() createRatingDTO: CreateRatingDTO,
  ): Promise<Rating> {
    return await this.ratingsService.createRating(createRatingDTO);
  }

  @Patch(':id')
  @ApiResponse({ type: Rating })
  @UsePipes(ValidationPipe)
  async updateRating(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateRatingDTO: UpdateRatingDTO,
  ): Promise<Rating> {
    return await this.ratingsService.updateRating(id, updateRatingDTO);
  }
}
