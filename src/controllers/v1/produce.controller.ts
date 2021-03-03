import {Controller, Get} from "@nestjs/common";
import {ProduceRepository} from "../../app/produce/infrastructure/produce.repository";
import {ListDto, ProduceDto} from "./dtos";

@Controller("produces")
export class ProduceController {
  constructor(private readonly produceRepository: ProduceRepository) {}

  @Get()
  async findAll(): Promise<ListDto<ProduceDto>> {
    const produces = await this.produceRepository.findAll();
    return {
      object: "list",
      data: produces.map((el) => ({
        id: el.id,
        name: el.name,
        seasonality: {
          firstMonth: el.seasonality.firstMonth,
          isAllYear: el.seasonality.isAllYear,
          months: el.seasonality.months,
          seasons: el.seasonality.seasons
        }
      }))
    };
  }
}
