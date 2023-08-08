import { DataSource } from 'typeorm';
import { User } from './schema/user.schema';

export const AppDataSource = new DataSource({
  type: 'mongodb',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 27017,
  database: 'search-land',
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize().catch((error) => console.log(error));
