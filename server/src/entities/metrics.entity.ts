import { Sequelize, Model, DataTypes } from 'sequelize';

export async function Metrics(dataSource){
    const metrics = dataSource.define('metrics', {
        id_repository: DataTypes.NUMBER
    });
    await metrics.sync();
    return metrics;
}
