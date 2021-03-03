import {Module} from "@nestjs/common";
import {ProduceModule} from "../../app/produce/application/produce.module";
import {ProduceController} from "./produce.controller";

@Module({
  imports: [ProduceModule],
  controllers: [ProduceController]
})
export class V1ControllersModule {}
