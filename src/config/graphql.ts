import {NODE_ENV} from "./config";

export const GRAPHQL_DEBUG = NODE_ENV !== "production";
export const GRAPHQL_PLAYGROUND = NODE_ENV !== "production";
