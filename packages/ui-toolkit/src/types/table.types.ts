export type SorterFunction<T> = (x0: T, x1: T) => number;

export interface TableColumn<T> {
  title: string;
  sorter?: SorterFunction<T>;
  render?: (x0: T) => JSX.Element;
  dataIndex: keyof T | ((x0: T) => string);
}

export enum Direction {
  DOWN = -1,
  UP = 1,
}
