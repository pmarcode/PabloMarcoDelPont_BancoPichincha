import { Sequelize, Model, DataTypes } from 'sequelize';

export async function Organization(dataSource){
    const organization = dataSource.define('organization', {
        id_organization: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.CHAR(50),
        status: DataTypes.INTEGER
    }, { timestamps: false });
    await organization.sync();
    return organization;
}
