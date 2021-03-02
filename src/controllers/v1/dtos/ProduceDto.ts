export interface SeasonDto {
  isAllYear: boolean;
  months: number[];
  firstMonth: number | null;
}

export class ProduceDto {
  id: number;
  name: string;
  season: SeasonDto;

  constructor(id: number, name: string, season: SeasonDto) {
    this.id = id;
    this.name = name;
    this.season = season;
  }
}
