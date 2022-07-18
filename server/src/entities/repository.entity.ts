import { Sequelize, Model, DataTypes } from 'sequelize';
import { Tribe } from './tribe.entity';

export async function Repository(dataSource){
    const tribe = await Tribe(dataSource);
    const repository = dataSource.define('repository', {
        id_repository: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_tribe: DataTypes.INTEGER,
        name: DataTypes.CHAR(50),
        state: DataTypes.CHAR(1),
        create_time: DataTypes.TIME,
        status: DataTypes.CHAR(1)
    }, { timestamps: false });
    repository.belongsTo(tribe, {foreignKey: 'id_tribe'});
    await repository.sync();
    return repository;
}
