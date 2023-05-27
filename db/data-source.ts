import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions : DataSourceOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT as unknown as number,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    migrations: ['dist/db/migrations/*.js'],
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;