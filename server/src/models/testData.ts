import DataSource from '../datasource/dataSource';
import { Metrics } from '../entities/metrics.entity';
import { Repository } from '../entities/repository.entity';
import { Tribe } from '../entities/tribe.entity';
import { Organization } from '../entities/organization.entity';

export default async function(){
    const dataSource = DataSource.getDataSource();
    const metrics = await Metrics(dataSource);
    const repository = await Repository(dataSource);
    const tribe = await Tribe(dataSource);
    const organization = await Organization(dataSource);

    await organization.create({
        id_organization: 1,
        name: 'Banco Pichincha',
        status: 1
    });

    await tribe.create({
        id_tribe: 1,
        id_organization: 1,
        name: 'Centro Digital',
        status: 1
    });

    await repository.create({
        id_repository: 1,
        id_tribe: 1,
        name: 'cd-common-utils',
        state: 'E',
        create_time: 1658151588,
        status: 'A'
    });

    await repository.create({
        id_repository: 2,
        id_tribe: 1,
        name: 'cd-common-text',
        state: 'A',
        create_time: 1658151588,
        status: 'A'
    });

    await metrics.create({
        id_repository: 1,
        coverage: 35,
        bugs: 0,
        vulnerabilities: 0,
        hotspot: 0,
        code_smells: 0
    });

    await metrics.create({
        id_repository: 2,
        coverage: 75,
        bugs: 0,
        vulnerabilities: 2,
        hotspot: 0,
        code_smells: 1
    });
}
