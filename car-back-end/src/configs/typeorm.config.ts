import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/*
  to generate migrations cd to /car-back-end
  run
  docker-compose exec car-back-end sh
  run in /app
  npm run typeorm:migrate GenerateCarTables
  where GenerateTables is name of your migration
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['dist/**/*.entity.js'],
  // it has to be .js not .ts
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
  // default false
  keepConnectionAlive: process.env.NODE_ENV === 'test',
  synchronize: false,
  migrationsRun: true,
};
