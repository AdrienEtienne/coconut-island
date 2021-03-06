import {Month} from "./month.enum";
import {Seasonality} from "./seasonality";

describe("Seasonality", () => {
  it.each([
    {firstMonth: 0, monthsCount: 0, isAllYear: true},
    {firstMonth: 1, monthsCount: 12, isAllYear: true},
    {firstMonth: 13, monthsCount: 13, isAllYear: true},
    {firstMonth: 1, monthsCount: 11, isAllYear: false}
  ])("should return valid all year", (el) => {
    const seasonality = new Seasonality(el.firstMonth, el.monthsCount);
    expect(seasonality.isAllYear).toBe(el.isAllYear);
  });

  it.each([
    {firstMonth: 0, monthsCount: 0, months: Object.values(Month).filter((el) => Number.isInteger(el))},
    {firstMonth: 12, monthsCount: 3, months: [Month.December, Month.January, Month.February]},
    {firstMonth: 6, monthsCount: 1, months: [Month.June]}
  ])("should return valid months", (el) => {
    const seasonality = new Seasonality(el.firstMonth, el.monthsCount);
    expect(seasonality.months).toEqual(el.months);
  });
});
