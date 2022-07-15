import DataSource from '../datasource/dataSource';
import { Tribe as TribeEntity } from '../entities/tribe.entity';

export default class Tribe {
    dataSource: DataSource;
    constructor(){
        this.dataSource = new DataSource();
    }
    async getAll(){
        const tribeEntity = await TribeEntity(this.dataSource.getDataSource());
        await tribeEntity.create({
            id_tribe: 1,
            id_repository: 1,
            name: '"Centro Digital',
            status: 1
        });
        return await tribeEntity.findAll();
    }
}
