import { Module } from '@nestjs/common';

import { RepositoriesController } from './repository.controller';

@Module({
  controllers: [RepositoriesController],
})
export class RepositoriesModule {}
