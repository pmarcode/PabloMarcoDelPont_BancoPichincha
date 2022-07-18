import { Sequelize, Model, DataTypes } from 'sequelize';
import { Organization } from './organization.entity';

export async function Tribe(dataSource){
    const organization = await Organization(dataSource);
    const tribe = dataSource.define('tribe', {
        id_tribe: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_organization: DataTypes.INTEGER,
        name: DataTypes.CHAR(50),
        status: DataTypes.INTEGER
    }, { timestamps: false });
    tribe.belongsTo(organization, {foreignKey: 'id_organization'});
    await tribe.sync();
    return tribe;
}
