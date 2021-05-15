enum Payment_type {
	online , doorTodoor

}
export class Order{
    id:number;
    date:Date;
    paymentType:Payment_type;
    cost:number;
    paid:boolean;
    weight:number;
    idUser:number;
    id_delivery:number;
}