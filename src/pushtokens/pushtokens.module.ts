import { Module } from '@nestjs/common';
import { PushtokensController } from './pushtokens.controller';
import { PushtokensService } from './pushtokens.service';

@Module({
  controllers: [PushtokensController],
  providers: [PushtokensService]
})
export class PushtokensModule {}
