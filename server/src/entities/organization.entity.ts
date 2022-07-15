import { Sequelize, Model, DataTypes } from 'sequelize';

export async function Organization(dataSource){
    const organization = dataSource.define('organization', {
        id_organization: DataTypes.INTEGER,
        name: DataTypes.CHAR(50),
        status: DataTypes.INTEGER
    });
    await organization.sync();
    return organization;
}
