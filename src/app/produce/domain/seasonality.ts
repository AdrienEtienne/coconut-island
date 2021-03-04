import {Month} from "./month.enum";

export class Seasonality {
  readonly months: Month[];

  get firstMonth(): Month {
    return this.months[0];
  }

  get isAllYear() {
    return this.months.length === 0 || this.months.length === 12;
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
