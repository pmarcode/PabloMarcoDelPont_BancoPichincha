import { Sequelize, DataTypes } from "sequelize";

export default class DataSource{
    dataSource: any;
    metrics: any;
    
    constructor(){
        this.dataSource = new Sequelize('sqlite::memory:');
    }

    getDataSource(){
        return this.dataSource;
    }
}
