import { Sequelize, Model, DataTypes } from 'sequelize';

export async function Tribe(dataSource){
    const tribe = dataSource.define('tribe', {
        id_tribe: DataTypes.INTEGER,
        id_repository: DataTypes.INTEGER,
        name: DataTypes.CHAR(50),
        status: DataTypes.INTEGER
    });
    await tribe.sync();
    return tribe;
}
