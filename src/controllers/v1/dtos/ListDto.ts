export class ListDto<T> {
  object: "list" = "list";

  data: T[];

  constructor(data: T[]) {
    this.data = data;
  }
}
