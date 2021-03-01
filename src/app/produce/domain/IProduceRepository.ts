import {Produce} from "./Produce";

export interface IProduceRepository {
  findAll(): Promise<Produce[]>;
}
