import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { Sequelize, Model, DataTypes } from 'sequelize';
import DataSource from '../../datasource/dataSource';
import { Metrics } from '../../entities/metrics.entity';


@Controller('metrics')
export class MetricsController {
  dataSource: DataSource;
  constructor() {
    this.dataSource = new DataSource();
  }

  @Get('getRepositoriesMetricsByTribe/:id')
  async index() {
    const metrics = await Metrics(this.dataSource.getDataSource());
    const m1 = await metrics.create({id_repository: 1});
    const ms = await metrics.findAll();
    return ms;
  }
}
