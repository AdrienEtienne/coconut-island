import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {IProduceRepository, Produce, Seasonality} from "../domain";
import {ProduceNotFoundException} from "../Errors/ProduceNotFoundException";
import {ProduceEntity} from "./produce.entity";

@Injectable()
export class ProduceRepository implements IProduceRepository {
  constructor(@InjectRepository(ProduceEntity) private produces: Repository<ProduceEntity>) {}

  async findAll(): Promise<Produce[]> {
    const entities = await this.produces.find();
    return entities.map(this.map);
  }

  async findOneById(id: number): Promise<Produce> {
    const entity = await this.produces.findOne(id);

    if (!entity) {
      throw new ProduceNotFoundException();
    }

    return this.map(entity);
  }

  private map(produceEntity: ProduceEntity): Produce {
    return new Produce(
      produceEntity.id,
      produceEntity.name,
      new Seasonality(produceEntity.seasonFirstMonth, produceEntity.seasonMonthsCount)
    );
  }
}
