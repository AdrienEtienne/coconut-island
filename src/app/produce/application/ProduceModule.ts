import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseModule} from "../../../config/typeorm";
import {ProduceEntity} from "../infrastructure/ProduceEntity";
import {ProduceRepository} from "../infrastructure/ProduceRepository";

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([ProduceEntity])],
  providers: [ProduceRepository],
  exports: [ProduceRepository]
})
export class ProduceModule {}
