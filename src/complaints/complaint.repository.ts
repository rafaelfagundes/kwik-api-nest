import { EntityRepository, Repository } from 'typeorm';
import { Complaint } from './complaint.entity';
import { CreateComplaintDTO } from './dto/create-complaint.dto';

@EntityRepository(Complaint)
export class ComplaintRepository extends Repository<Complaint> {
  async createComplaint(
    createComplaintDTO: CreateComplaintDTO,
  ): Promise<Complaint> {
    const { itemId, itemType, reason, message, isRead } = createComplaintDTO;

    const complaint = new Complaint();

    complaint.itemId = itemId;
    complaint.itemType = itemType;
    complaint.reason = reason;
    complaint.message = message;
    complaint.isRead = isRead;

    await complaint.save();

    return complaint;
  }
}
