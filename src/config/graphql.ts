import {NODE_ENV} from "./config";

export const GRAPHQL_DEBUG = process.env.GRAPHQL_DEBUG ? process.env.GRAPHQL_DEBUG === "true" : NODE_ENV !== "production";
export const GRAPHQL_PLAYGROUND = process.env.GRAPHQL_PLAYGROUND ? process.env.GRAPHQL_PLAYGROUND === "true" : NODE_ENV !== "production";
