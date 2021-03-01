import {Inject, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {IProduceRepository} from "../domain/IProduceRepository";
import {Produce} from "../domain/Produce";
import {ProduceEntity} from "./ProduceEntity";

@Injectable()
export class ProduceRepository implements IProduceRepository {
  constructor(@InjectRepository(ProduceEntity) private produces: Repository<ProduceEntity>) {}

  async findAll(): Promise<Produce[]> {
    const entities = await this.produces.find();
    return entities.map((el) => new Produce(el.id, el.name));
  }
}
