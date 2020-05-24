import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreRepository } from '../stores/store.repository';
import { UserRepository } from '../users/user.repository';
import { CreateNotificationDTO } from './dto/create-notification.dto';
import { Notification } from './notification.entity';
import { NotificationRepository } from './notification.repository';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(NotificationRepository)
    private notificationRepository: NotificationRepository,

    @InjectRepository(UserRepository)
    private userRepository: UserRepository,

    @InjectRepository(StoreRepository)
    private storeRepository: StoreRepository,
  ) {}

  async createNotification(
    createNotificationDTO: CreateNotificationDTO,
  ): Promise<Notification> {
    const { userId, storeId } = createNotificationDTO;

    let user = null;
    let store = null;

    if (userId) user = await this.userRepository.findOne(userId);
    if (storeId) store = await this.storeRepository.findOne(storeId);

    if (!user && !store) {
      throw new BadRequestException('User ID or Store ID was not found');
    }

    return await this.notificationRepository.createNotification(
      createNotificationDTO,
      user,
      store,
    );
  }

  async updateNotification(id: string, isRead: boolean): Promise<Notification> {
    const notification = await this.notificationRepository.findOne(id);
    if (!notification)
      throw new NotFoundException(`Unable to find notification: ${id}`);
    notification.isRead = isRead;
    await notification.save();
    return notification;
  }
}
