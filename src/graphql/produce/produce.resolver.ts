import {Args, Query, Resolver} from "@nestjs/graphql";
import {GraphQLError} from "graphql";
import {ProduceNotFoundException} from "../../app/produce/Errors/ProduceNotFoundException";
import {ProduceRepository} from "../../app/produce/infrastructure/produce.repository";
import {ProduceModel} from "../../models";

@Resolver(() => ProduceModel)
export class ProducesResolver {
  constructor(private readonly produceRepository: ProduceRepository) {}

  @Query(() => [ProduceModel])
  produces(): Promise<ProduceModel[]> {
    return this.produceRepository.findAll();
  }

  @Query(() => ProduceModel)
  async produce(@Args("id") id: number): Promise<ProduceModel> {
    try {
      const recipe = await this.produceRepository.findOneById(id);
      return recipe;
    } catch (e) {
      if (e instanceof ProduceNotFoundException) {
        throw new GraphQLError("Produce not found.");
      }
      throw e;
    }
  }
}
