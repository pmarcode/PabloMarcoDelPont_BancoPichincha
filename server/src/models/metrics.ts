import DataSource from '../datasource/dataSource';
import { Metrics as MetricsEntity } from '../entities/metrics.entity';
import { Repository } from '../entities/repository.entity';
import { Tribe } from '../entities/tribe.entity';
import { Organization } from '../entities/organization.entity';
export default class Metrics {
    async getAll(){
        const dataSource = DataSource.getDataSource();
        const metricsEntity = await MetricsEntity(dataSource);
        return await metricsEntity.findAll({
            include: {
                model: await Repository(dataSource),
                include: {
                    model: await Tribe(dataSource),
                    include: await Organization(dataSource)
                }
            }
        });
    }
}
export function getHumanReadableCoverage(coverage){
    return coverage + '%';
}
