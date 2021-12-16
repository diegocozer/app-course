import { IClient } from "./client";
import { IProduct } from "./products";

export interface IOrder{
    id: string
    client: IClient
    value: number
    products: IProduct
}