type DataItem = (React.ReactNode | string)[];

export interface ITable {
  header: string[];
  data: DataItem[];
  className?: string;
}
