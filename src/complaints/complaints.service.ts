import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Complaint } from './complaint.entity';
import { ComplaintRepository } from './complaint.repository';
import { CreateComplaintDTO } from './dto/create-complaint.dto';

@Injectable()
export class ComplaintsService {
  constructor(
    @InjectRepository(ComplaintRepository)
    private complaintRepository: ComplaintRepository,
  ) {}

  async createComplaint(
    createComplaintDTO: CreateComplaintDTO,
  ): Promise<Complaint> {
    return this.complaintRepository.createComplaint(createComplaintDTO);
  }
}
