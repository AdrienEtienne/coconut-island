export class ListDto<T> {
  object: "list" = "list";
  data: T[];
}
