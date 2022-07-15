import DataSource from '../datasource/dataSource';
import { Metrics as MetricsEntity } from '../entities/metrics.entity';

export default class Metrics {
    dataSource: DataSource;
    constructor(){
        this.dataSource = new DataSource();
    }
    async getAll(){
        const metricsEntity = await MetricsEntity(this.dataSource.getDataSource());
        await metricsEntity.create({
            id_repository: 1,
            coverage: 35,
            bugs: 0,
            vulnerabilities: 0,
            hotspot: 0,
            code_smells: 0
        });
        await metricsEntity.create({
            id_repository: 2,
            coverage: 75,
            bugs: 0,
            vulnerabilities: 2,
            hotspot: 0,
            code_smells: 1
        });
        return await metricsEntity.findAll();
    }
}
