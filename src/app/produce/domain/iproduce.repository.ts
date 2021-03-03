import {Produce} from "./produce";

export interface IProduceRepository {
  findAll(): Promise<Produce[]>;
}
