import {Season} from "./Season";

export class Produce {
  id: number;
  name: string;
  season: Season;

  constructor(id: number, name: string, season: Season) {
    this.id = id;
    this.name = name;
    this.season = season;
  }
}
