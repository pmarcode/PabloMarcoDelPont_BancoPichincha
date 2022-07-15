import { Sequelize, Model, DataTypes } from 'sequelize';

export async function Metrics(dataSource){
    const metrics = dataSource.define('metrics', {
        id_repository: DataTypes.NUMBER,
        coverage: DataTypes.DOUBLE,
        bugs: DataTypes.INTEGER,
        vulnerabilities: DataTypes.INTEGER,
        hotspot: DataTypes.INTEGER,
        code_smells: DataTypes.INTEGER
    });
    await metrics.sync();
    return metrics;
}
