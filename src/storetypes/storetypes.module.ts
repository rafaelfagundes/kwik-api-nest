import { Module } from '@nestjs/common';
import { StoretypesController } from './storetypes.controller';
import { StoretypesService } from './storetypes.service';

@Module({
  controllers: [StoretypesController],
  providers: [StoretypesService]
})
export class StoretypesModule {}
