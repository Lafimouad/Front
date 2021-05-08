export class Claim {
    idClaim: number;
    idUser: number;
    subject : string ;
    systemProblem : string ;
    deliveryProblem : string ;
    productProblem : string ;
    description : string;
    decision: string;
    level:string;
    status:string;
    date: string;
    productWithProb: string;
    constructor (
        idClaim: number,
        idUser : number,
        subject: string,
        systemProblem: string,
        deliveryProblem: string,
        productProblem: string,
        description:string,
        decision: string,
        level:string,
        status:string,
        date: string,
        productWithProb: string

    ){  this.idClaim= idClaim ;
        this.idUser=idUser;
        this.subject = subject ;
        this.systemProblem = systemProblem ;
        this.deliveryProblem=deliveryProblem ;
        this.productProblem =productProblem ;
        this.description= description;
        this.decision=decision;
        this.level=level;
        this.status=status;
        this.date=date;
        this.productWithProb=productWithProb;
    }
}