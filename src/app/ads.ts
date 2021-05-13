import { Client } from "./auth/ClientInfo";

export class Ads{
    idAdvertisment: number;
    idUser: number;
    dateAdvertisment : string;
    enddate: string;
    finalviews : number ;
    targetviews : number ;
    typeAdvertisement : string ;
    cost : number ;
    channel : string;
    client:Client;
   
    
}