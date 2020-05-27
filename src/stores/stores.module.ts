import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreRepository } from './store.repository';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';

@Module({
  imports: [TypeOrmModule.forFeature([StoreRepository])],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
