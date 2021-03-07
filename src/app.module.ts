import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {V1ControllersModule} from "./controllers/v1/v1.controllers.module";
import {GQLModule} from "./graphql/graphql.module";

@Module({
  imports: [V1ControllersModule, GQLModule],
  controllers: [AppController]
})
export class AppModule {}
