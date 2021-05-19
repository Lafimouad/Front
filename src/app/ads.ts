import { Client } from "./auth/ClientInfo";

export class Advertisement{
    idAdvertisment: number;
    dateAdvertisment : string;
    enddate: string;
    finalviews : number ;
    targetviews : number ;
    typeAdvertisement : string ;
    cost : number ;
    channel : string;
    client:Client;
   
    
}