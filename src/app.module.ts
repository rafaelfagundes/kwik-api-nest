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
import { RatingsModule } from './ratings/ratings.module';
import { StoretypesModule } from './storetypes/storetypes.module';
import { PushtokensModule } from './pushtokens/pushtokens.module';
import { FavoritesModule } from './favorites/favorites.module';
import { CouponsModule } from './coupons/coupons.module';
import { UsedcouponsModule } from './usedcoupons/usedcoupons.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { SectionsModule } from './sections/sections.module';
import { AddonsModule } from './addons/addons.module';
import { CombosModule } from './combos/combos.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    CitiesModule,
    SettingsModule,
    ImagesModule,
    StoresModule,
    RatingsModule,
    StoretypesModule,
    PushtokensModule,
    FavoritesModule,
    CouponsModule,
    UsedcouponsModule,
    ComplaintsModule,
    CatalogsModule,
    SectionsModule,
    AddonsModule,
    CombosModule,
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController, NotificationsController],
  providers: [AppService],
})
export class AppModule {}
