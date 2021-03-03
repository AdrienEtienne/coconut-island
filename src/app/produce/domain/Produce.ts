import {Seasonality} from "./seasonality";

export class Produce {
  id: number;
  name: string;
  seasonality: Seasonality;

  constructor(id: number, name: string, seasonality: Seasonality) {
    this.id = id;
    this.name = name;
    this.seasonality = seasonality;
  }
}
