import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateNotificationDTO } from './dto/create-notification.dto';
import { UpdateNotificationDTO } from './dto/update-notification.dto';
import { Notification } from './notification.entity';
import { NotificationsService } from './notifications.service';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Post()
  @ApiCreatedResponse({ type: Notification })
  @UsePipes(ValidationPipe)
  async createNotification(
    @Body() createNotificationDTO: CreateNotificationDTO,
  ): Promise<Notification> {
    return await this.notificationsService.createNotification(
      createNotificationDTO,
    );
  }

  @Patch(':id/status')
  @ApiCreatedResponse({ type: Notification })
  @UsePipes(ValidationPipe)
  async updateNotification(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateNotificationDTO: UpdateNotificationDTO,
  ) {
    return await this.notificationsService.updateNotification(
      id,
      updateNotificationDTO.isRead,
    );
  }
}
