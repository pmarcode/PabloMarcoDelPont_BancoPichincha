import DataSource from '../datasource/dataSource';
import { Repository as RepositoryEntity } from '../entities/repository.entity';

export interface IRepository {
    id: number;
    state: number;
}

export const repositories: IRepository[] = [
    {
        "id": 1,
        "state": 604
    },
    {
        "id": 2,
        "state": 605
    },
    {
        "id": 3,
        "state": 606
    }
];

export default class Repository {
    async getAll(){
        const repositoryEntity = await RepositoryEntity(DataSource.getDataSource());
        return await repositoryEntity.findAll();
    }
}
