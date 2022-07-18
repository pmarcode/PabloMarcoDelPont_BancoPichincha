import DataSource from '../datasource/dataSource';
import { Tribe as TribeEntity } from '../entities/tribe.entity';

export default class Tribe {
    dataSource: DataSource;
    async getAll(){
        const tribeEntity = await TribeEntity(DataSource.getDataSource());
        return await tribeEntity.findAll();
    }
}
