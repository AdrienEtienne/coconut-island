import {Controller, Get} from "@nestjs/common";
import {ProduceRepository} from "../../app/produce/infrastructure/ProduceRepository";
import {ListDto, ProduceDto} from "./dtos";

@Controller("produces")
export class ProduceController {
  constructor(private readonly produceRepository: ProduceRepository) {}

  @Get()
  async findAll(): Promise<ListDto<ProduceDto>> {
    const produces = await this.produceRepository.findAll();
    return new ListDto(produces);
  }
}
