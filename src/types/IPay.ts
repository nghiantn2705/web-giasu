export interface IPay {
  code: number;
  message: string;
  data: string;
}
export interface ISavePay {
  id: number;
  coin: string;
}
export interface IHistoryPaypal {
  id: number;
  idUser: string;
  coin: string;
  bank: string;
  code: number;
  status: string;
}
