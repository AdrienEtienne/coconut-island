import {Month} from "./Month";

export class Season {
  readonly months: Month[];

  get firstMonth(): Month | null {
    return this.months.length === 0 ? null : this.months[0];
  }

  get isAllYear() {
    return this.months.length === 0 || this.months.length === 12;
  }

  constructor(months: Month[]) {
    this.months = months;
  }
}
