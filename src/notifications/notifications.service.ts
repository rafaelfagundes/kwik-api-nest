import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  createNotification(): string {
    return 'New Notification';
  }
}
