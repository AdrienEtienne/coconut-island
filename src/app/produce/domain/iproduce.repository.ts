import {Produce} from "./produce";

export interface IProduceRepository {
  findAll(): Promise<Produce[]>;
  findOneById(id: number): Promise<Produce>;
}
