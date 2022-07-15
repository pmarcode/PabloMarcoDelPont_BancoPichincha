import { Module } from '@nestjs/common';
import { RepositoriesModule } from './modules/repositories/repository.module';
import { OrganizationsModule } from './modules/organizations/organization.module';

@Module({
  imports: [RepositoriesModule, OrganizationsModule],
})
export class AppModule {}
