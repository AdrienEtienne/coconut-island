import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppV1ControllersModule} from "./controllers/v1/AppV1ControllersModule";

@Module({
  imports: [AppV1ControllersModule],
  controllers: [AppController]
})
export class AppModule {}
