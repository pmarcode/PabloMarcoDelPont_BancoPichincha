import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import Metrics from '../../models/metrics';
import Tribe from '../../models/tribe';

@Controller('metrics')
export class MetricsController {
  metrics: Metrics;
  tribe: Tribe;
  constructor() {
    this.metrics = new Metrics();
    this.tribe = new Tribe();
  }

  @Get('getRepositoriesMetricsByTribe/:id')
  async index() {
    return this.tribe.getAll();
  }
}
