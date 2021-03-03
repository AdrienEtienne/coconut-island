import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {V1ControllersModule} from "./controllers/v1/v1.controllers.module";

@Module({
  imports: [V1ControllersModule],
  controllers: [AppController]
})
export class AppModule {}
