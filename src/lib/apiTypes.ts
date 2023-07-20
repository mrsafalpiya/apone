export interface IDevice {
  id: number;
  name: string;
  data: {
    [key: string]: string | number;
  } | null;
}
