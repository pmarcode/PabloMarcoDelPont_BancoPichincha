import { Module } from '@nestjs/common';

import { OrganizationsController } from './organization.controller';

@Module({
  controllers: [OrganizationsController],
})
export class OrganizationsModule {}
