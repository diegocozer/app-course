import { IProduct } from "../interfaces/products"

export abstract class Product implements IProduct {
    id: string
    description: string 
    price: number
    category:string

    constructor(description:string, prince: number, category: string){
        this.id = `${Math.floor(Math.random()* (500000-1))}`
        this.description = description
        this.price = prince
        this.category = category
    }
}