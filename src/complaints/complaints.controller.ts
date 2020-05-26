import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Complaint } from './complaint.entity';
import { ComplaintsService } from './complaints.service';
import { CreateComplaintDTO } from './dto/create-complaint.dto';

@ApiTags('complaints')
@Controller('complaints')
export class ComplaintsController {
  constructor(private complaintsService: ComplaintsService) {}

  @Post()
  @ApiCreatedResponse({ type: Complaint })
  @UsePipes(ValidationPipe)
  async createComplaint(
    @Body() createComplaintDTO: CreateComplaintDTO,
  ): Promise<Complaint> {
    return await this.complaintsService.createComplaint(createComplaintDTO);
  }
}
