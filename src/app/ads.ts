export class Ads{
    idAdvertisment: number;
    idUser : number;
    dateAdvertisment : string;
    enddate: string;
    finalviews : number ;
    targetviews : number ;
    typeAdvertisement : string ;
    cost : number ;
    channel : string;
    
    constructor (
        idAdvertisment: number,
        idUser : number,
        dateAdvertisment : string,
        enddate: string,
        finalviews : number, 
        targetviews : number, 
        typeAdvertisement : string, 
        cost : number ,
        channel : string
        

    ){  this.idAdvertisment= idAdvertisment ;
        this.idUser= idUser ;
        this.dateAdvertisment=dateAdvertisment;
        this.enddate=enddate;
        this.finalviews = finalviews ;
        this.targetviews = targetviews ;
        this.typeAdvertisement=typeAdvertisement ;
        this.cost =cost ;
        this.channel= channel;
        
    }
}