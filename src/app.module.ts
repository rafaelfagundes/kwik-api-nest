import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddonsModule } from './addons/addons.module';
import { AdressesModule } from './adresses/adresses.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { CitiesModule } from './cities/cities.module';
import { CombosModule } from './combos/combos.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { typeOrmConfig } from './config/typeorm.config';
import { CouponsModule } from './coupons/coupons.module';
import { FavoritesModule } from './favorites/favorites.module';
import { ImagesModule } from './images/images.module';
import { NotificationsModule } from './notifications/notifications.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { PushtokensModule } from './pushtokens/pushtokens.module';
import { RatingsModule } from './ratings/ratings.module';
import { SectionsModule } from './sections/sections.module';
import { SettingsModule } from './settings/settings.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { StoresModule } from './stores/stores.module';
import { StoretypesModule } from './storetypes/storetypes.module';
import { UsedcouponsModule } from './usedcoupons/usedcoupons.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AddonsModule,
    AdressesModule,
    CatalogsModule,
    CitiesModule,
    CombosModule,
    ComplaintsModule,
    CouponsModule,
    FavoritesModule,
    ImagesModule,
    NotificationsModule,
    OrdersModule,
    ProductsModule,
    PushtokensModule,
    RatingsModule,
    SectionsModule,
    SettingsModule,
    SpecialtiesModule,
    StoresModule,
    StoretypesModule,
    UsedcouponsModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
