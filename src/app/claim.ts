import { User } from "./user";

export class Claim {
    idClaim: number;
    subject : string ;
    systemProblem : string ;
    deliveryProblem : string ;
    productProblem : string ;
    description : string;
    decision: string;
    level:string;
    status:string;
    date: string;
    user: User;
    productWithProb: number;
    
}