import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class SeasonalityModel {
  @Field()
  isAllYear: boolean;

  @Field(() => [Number])
  months: number[];

  @Field()
  firstMonth: number;
}
