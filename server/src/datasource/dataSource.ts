import { Sequelize, DataTypes } from "sequelize";

export default class DataSource {
    static dataSource;
    
    private constructor(){}

    public static getDataSource(): DataSource {
        if(!DataSource.dataSource){
            DataSource.dataSource = new Sequelize('sqlite::memory:');
        }
        return DataSource.dataSource;
    }
}
