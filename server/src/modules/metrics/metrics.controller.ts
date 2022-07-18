import { Controller, Get, ParseArrayPipe, Response, StreamableFile } from '@nestjs/common';
import TestData from '../../models/testData';
import Metrics from '../../models/metrics';
import MetricsDTO from 'src/models/metrics.dto';
import { Parser } from 'json2csv';

@Controller('metrics')
export class MetricsController {
  metrics: Metrics;
  constructor() {
    this.metrics = new Metrics();
    TestData();
  }

  @Get('getRepositoriesMetricsByTribe/:id')
  async index() {
    const metricsDTO = new MetricsDTO(await this.metrics.getAll());

    return metricsDTO.getData();
  }

  @Get('CSV/getRepositoriesMetricsByTribe/:id')
  async csv(@Response() res) {
    const metricsDTO = new MetricsDTO(await this.metrics.getAll());
    const json2csv = new Parser([]);
    const csv = json2csv.parse(metricsDTO.getData());
    res.header('Content-Type', 'text/csv');
    res.attachment('test.csv');
    return res.send(csv);
  }
}
