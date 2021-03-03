import {TypeOrmModule} from "@nestjs/typeorm";
import {join} from "path";
import {ConnectionOptions} from "typeorm";
import {ProduceEntity} from "../../app/produce/infrastructure/produce.entity";
import {
  DATABASE_HOST,
  DATABASE_MIGRATE,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_SSL,
  DATABASE_SYNCHRONIZE,
  DATABASE_URL,
  DATABASE_USERNAME
} from "./config";

const connectionOptions: ConnectionOptions = {
  ...(DATABASE_URL
    ? {
        url: DATABASE_URL
      }
    : {
        database: "postgres",
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD
      }),
  type: "postgres",
  ssl: DATABASE_SSL,
  extra: {
    ssl: DATABASE_SSL
      ? {
          rejectUnauthorized: false
        }
      : undefined
  },
  entities: [ProduceEntity],
  synchronize: DATABASE_SYNCHRONIZE,
  migrations: [join(__dirname, "../../migration/**/*.{js,ts}")],
  migrationsRun: DATABASE_MIGRATE,
  subscribers: [join(__dirname, "../../subscriber/**/*.{js,ts}")]
};

export const DatabaseModule = TypeOrmModule.forRoot(connectionOptions);
