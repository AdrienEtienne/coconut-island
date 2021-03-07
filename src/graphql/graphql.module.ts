import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {join} from "path";
import {ProduceModule} from "../app/produce/application/produce.module";
import {GRAPHQL_DEBUG, GRAPHQL_PLAYGROUND} from "../config";
import {ProducesResolver} from "./produce/produce.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: GRAPHQL_DEBUG,
      playground: GRAPHQL_PLAYGROUND,
      autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql"),
      sortSchema: true
    }),
    ProduceModule
  ],
  providers: [ProducesResolver]
})
export class GQLModule {}
