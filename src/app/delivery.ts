export enum MeansOfTransport {
    car , bicycle , motorcycle , truck
}
enum DurationOfDelivering {
    punctual, absent, late
}
enum QualityOfDelivering { good, great, bad, awful }
enum ServiceDelivering { one, two, three, four, five }

export class Delivery {
    
    id_delivery: number;
    date_delivery: Date;
    destination_delivery: String;
    meanOfTransport_delivery: MeansOfTransport;
    cost_delivery: number;
    quality_delivery: QualityOfDelivering;
    duration_delivery: DurationOfDelivering;
    scoreDelivery: number;
    distance: number;
    service_delivery: ServiceDelivering;

    constructor(){}

/**constructor(id : number ,date: Date, destination: string, transport: MeansOfTransport, cost: number, quality: QualityOfDelivering, duration: DurationOfDelivering, score:number , distance:number , service : ServiceDelivering) {
    this.id_delivery = id;
    this.date_delivery = date;
    this.destination_delivery = destination;
    this.meanOfTransport_delivery = transport;
    this.cost_delivery = cost;
    this.quality_delivery = quality;
    this.duration_delivery = duration; 
    this.scoreDelivery= score;
    this.distance= distance;
    this.Stars_service_delivery= service;
    
}**/

}