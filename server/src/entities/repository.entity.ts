import { Sequelize, Model, DataTypes } from 'sequelize';

export async function Repository(dataSource){
    const repository = dataSource.define('repository', {
        id_repository: DataTypes.INTEGER,
        id_tribe: DataTypes.INTEGER,
        name: DataTypes.CHAR(50),
        state: DataTypes.CHAR(1),
        create_time: DataTypes.TIME,
        status: DataTypes.CHAR(1)
    });
    await repository.sync();
    return repository;
}
