import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { typeOrmConfig } from './config/typeorm.config';
import { NotificationsController } from './notifications/notifications.controller';
import { SettingsModule } from './settings/settings.module';
import { UsersModule } from './users/users.module';
import { ImagesModule } from './images/images.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    CitiesModule,
    SettingsModule,
    ImagesModule,
    StoresModule,
  ],
  controllers: [AppController, NotificationsController],
  providers: [AppService],
})
export class AppModule {}
