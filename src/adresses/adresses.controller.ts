import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Address } from './address.entity';
import { AdressesService } from './adresses.service';
import { CreateAddressDTO } from './dto/create-address.dto';

@ApiTags('adresses')
@Controller('adresses')
export class AdressesController {
  constructor(private adressesService: AdressesService) {}

  @Post()
  @ApiCreatedResponse({ type: Address })
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDTO: CreateAddressDTO,
  ): Promise<Address> {
    return await this.adressesService.createAddress(createAddressDTO);
  }
}
