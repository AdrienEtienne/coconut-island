import {Field, ID, ObjectType} from "@nestjs/graphql";
import {SeasonalityModel} from "./seasonality.model";

@ObjectType()
export class ProduceModel {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  seasonality: SeasonalityModel;
}
