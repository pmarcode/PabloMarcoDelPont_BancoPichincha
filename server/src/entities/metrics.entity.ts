import { Sequelize, Model, DataTypes } from 'sequelize';
import { Repository } from './repository.entity';

export async function Metrics(dataSource){
    const repository = await Repository(dataSource);
    const metrics = dataSource.define('metrics', {
        id_repository: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        coverage: DataTypes.DOUBLE,
        bugs: DataTypes.INTEGER,
        vulnerabilities: DataTypes.INTEGER,
        hotspot: DataTypes.INTEGER,
        code_smells: DataTypes.INTEGER
    }, { timestamps: false });
    metrics.hasOne(repository, {foreignKey: 'id_repository'});
    repository.belongsTo(metrics, {foreignKey: 'id_repository'});
    await metrics.sync();
    return metrics;
}
