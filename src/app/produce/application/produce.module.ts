import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseModule} from "../../../config/typeorm";
import {ProduceEntity} from "../infrastructure/produce.entity";
import {ProduceRepository} from "../infrastructure/produce.repository";

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([ProduceEntity])],
  providers: [ProduceRepository],
  exports: [ProduceRepository]
})
export class ProduceModule {}
