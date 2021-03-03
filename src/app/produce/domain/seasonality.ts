import {Month} from "./month.enum";
import {Season} from "./season.enum";
import {some} from "lodash";

export class Seasonality {
  readonly months: Month[];

  get firstMonth(): Month {
    return this.months[0];
  }

  get isAllYear() {
    return this.months.length === 0 || this.months.length === 12;
  }

  get seasons(): Season[] {
    const seasons: Season[] = [];
    // Spring
    if (some(this.months, (el) => el === Month.March || el === Month.April || el === Month.May)) {
      seasons.push(Season.Spring);
    }

    // Summer
    if (some(this.months, (el) => el === Month.June || el === Month.July || el === Month.August)) {
      seasons.push(Season.Summer);
    }

    // Autumn
    if (some(this.months, (el) => el === Month.September || el === Month.October || el === Month.November)) {
      seasons.push(Season.Autumn);
    }

    // Winter
    if (some(this.months, (el) => el === Month.December || el === Month.January || el === Month.February)) {
      seasons.push(Season.Winter);
    }
    return seasons;
  }

  constructor(firstMonth: number, monthsCount: number) {
    const months: Month[] = [];

    if (firstMonth >= 1 && firstMonth <= 12 && monthsCount >= 1 && monthsCount <= 11) {
      for (let i = 0; i < monthsCount; i++) {
        const currentMonth = firstMonth + i;
        const month = (((currentMonth - 1) % 12) + 1) as Month;
        months.push(month);
      }
    }

    if (months.length === 0) {
      Object.values(Month).filter((value) => {
        if (Number.isInteger(value)) {
          months.push(value as Month);
        }
      });
    }

    this.months = months;
  }
}
