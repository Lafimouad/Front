import { Product } from "./product";

export class Order {
    id: number;
    paid: boolean;
    cost:number;
    date:Date;
    weight:number;
    idUser:number;
    products: Product[];
}
