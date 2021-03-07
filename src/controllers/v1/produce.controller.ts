import {Controller, Get} from "@nestjs/common";
import {ProduceRepository} from "../../app/produce/infrastructure/produce.repository";
import {ListModel, ProduceModel} from "../../models";

@Controller("produces")
export class ProduceController {
  constructor(private readonly produceRepository: ProduceRepository) {}

  @Get()
  async findAll(): Promise<ListModel<ProduceModel>> {
    const produces = await this.produceRepository.findAll();
    return {
      object: "list",
      data: produces.map((el) => ({
        id: el.id,
        name: el.name,
        seasonality: {
          firstMonth: el.seasonality.firstMonth,
          isAllYear: el.seasonality.isAllYear,
          months: el.seasonality.months
        }
      }))
    };
  }
}
