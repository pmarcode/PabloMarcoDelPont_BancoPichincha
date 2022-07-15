import { Module } from '@nestjs/common';
import { RepositoriesModule } from './modules/repositories/repository.module';
import { OrganizationsModule } from './modules/organizations/organization.module';
import { MetricsModule } from './modules/metrics/metrics.module';

@Module({
  imports: [RepositoriesModule, OrganizationsModule, MetricsModule],
})
export class AppModule {}
