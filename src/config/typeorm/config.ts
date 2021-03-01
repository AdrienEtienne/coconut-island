import {NODE_ENV} from "../config";

export const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
export const DATABASE_PORT = parseInt(process.env.DATABASE_PORT || "5432");
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME || "postgres";
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
export const DATABASE_SYNCHRONIZE = NODE_ENV === "production" ? false : true;
export const DATABASE_MIGRATE = process.env.DATABASE_MIGRATE === "true";
export const DATABASE_URL = process.env.DATABASE_URL || undefined;
export const DATABASE_SSL = process.env.DATABASE_SSL === "true";
