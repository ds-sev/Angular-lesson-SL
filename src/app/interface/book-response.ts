import {IBook} from "./book";

export interface IBookResponse {
  code: number
  data: IBook[]
  status: string
  total: number
}
