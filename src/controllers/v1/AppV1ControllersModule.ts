import {Module} from "@nestjs/common";
import {ProduceModule} from "../../app/produce/application/ProduceModule";
import {ProduceController} from "./ProduceController";

@Module({
  imports: [ProduceModule],
  controllers: [ProduceController]
})
export class AppV1ControllersModule {}
