import {Month} from "../domain/Month";
import {ProduceEntity} from "./ProduceEntity";
import {ProduceRepository} from "./ProduceRepository";

describe("ProduceRepository", () => {
  describe("Map", () => {
    it.each([
      {
        entity: {
          seasonFirstMonth: 0,
          seasonMonthsCount: 0
        },
        produce: {isAllYear: true, months: [], firstMonth: null}
      },
      {
        entity: {
          seasonFirstMonth: 3,
          seasonMonthsCount: 3
        },
        produce: {isAllYear: false, months: [Month.March, Month.April, Month.May], firstMonth: Month.March}
      },
      {
        entity: {
          seasonFirstMonth: 11,
          seasonMonthsCount: 4
        },
        produce: {isAllYear: false, months: [Month.November, Month.December, Month.January, Month.February], firstMonth: Month.November}
      }
    ] as Array<{
      entity: {
        seasonFirstMonth: number;
        seasonMonthsCount: number;
      };
      produce: {
        months: Month[];
        isAllYear: boolean;
        firstMonth: number | null;
      };
    }>)("should return mapped produce", (el) => {
      const entity = new ProduceEntity();
      entity.seasonFirstMonth = el.entity.seasonFirstMonth;
      entity.seasonMonthsCount = el.entity.seasonMonthsCount;
      const produce = ProduceRepository.Map(entity);

      expect(el.produce.isAllYear).toEqual(produce.season.isAllYear);
      expect(el.produce.firstMonth).toEqual(produce.season.firstMonth);
      expect(el.produce.months).toEqual(produce.season.months);
    });
  });
});
