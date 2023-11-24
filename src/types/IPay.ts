export interface IPay {
  code: number;
  message: string;
  data: string;
}
export interface IHistoryPaypal {
  id: number;
  idClient: number;
  coin: string;
  type: string;
  created_at: Date;
}
