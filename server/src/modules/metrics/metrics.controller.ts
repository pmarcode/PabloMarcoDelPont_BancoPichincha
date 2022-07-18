import { Controller, Get } from '@nestjs/common';
import TestData from '../../models/testData';

import Metrics from '../../models/metrics';

@Controller('metrics')
export class MetricsController {
  metrics: Metrics;
  constructor() {
    this.metrics = new Metrics();
    TestData();
  }

  @Get('getRepositoriesMetricsByTribe/:id')
  async index() {
    return await this.metrics.getAll();
  }
}
