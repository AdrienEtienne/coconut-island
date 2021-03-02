import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {IProduceRepository} from "../domain/IProduceRepository";
import {Month} from "../domain/Month";
import {Produce} from "../domain/Produce";
import {Season} from "../domain/Season";
import {ProduceEntity} from "./ProduceEntity";

@Injectable()
export class ProduceRepository implements IProduceRepository {
  constructor(@InjectRepository(ProduceEntity) private produces: Repository<ProduceEntity>) {}

  async findAll(): Promise<Produce[]> {
    const entities = await this.produces.find();
    return entities.map(ProduceRepository.Map);
  }

  static Map(produceEntity: ProduceEntity): Produce {
    const months: Month[] = [];

    if (
      produceEntity.seasonFirstMonth >= 1 &&
      produceEntity.seasonFirstMonth <= 12 &&
      produceEntity.seasonMonthsCount >= 1 &&
      produceEntity.seasonMonthsCount <= 11
    ) {
      for (let i = 0; i < produceEntity.seasonMonthsCount; i++) {
        const currentMonth = produceEntity.seasonFirstMonth + i;
        const month = (((currentMonth - 1) % 12) + 1) as Month;
        months.push(month);
      }
    }

    return new Produce(produceEntity.id, produceEntity.name, new Season(months));
  }
}
