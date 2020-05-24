import { EntityRepository, Repository } from 'typeorm';
import { Store } from '../stores/store.entity';
import { User } from '../users/user.entity';
import { CreateNotificationDTO } from './dto/create-notification.dto';
import { Notification } from './notification.entity';

@EntityRepository(Notification)
export class NotificationRepository extends Repository<Notification> {
  async createNotification(
    creatNotificationDto: CreateNotificationDTO,
    user: User,
    store: Store,
  ): Promise<Notification> {
    const {
      logo,
      notificationType,
      body,
      title,
      additionalInfo,
    } = creatNotificationDto;

    const notification = new Notification();
    notification.logo = logo;
    notification.notificationType = notificationType;
    notification.body = body;
    notification.title = title;
    notification.additionalInfo = additionalInfo;
    notification.user = user;
    notification.store = store;

    await notification.save();

    return notification;
  }
}
