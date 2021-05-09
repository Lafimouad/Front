export class Pa {
    id: number;
    quantityProduct: number;
    productofthemonth : string ;
    code : string ;
    name : string ;
    category : string ;
    price : number;
    rating: number;
    available:string;
    description:string;
    weight: number;
    imagePath: string;
    categoryProduct: string;
    supplier: number;
    shelf: number;
    feedback: number;
    promotion: number;
    constructor (
        id: number,
    quantityProduct: number,
    productofthemonth : string ,
    code : string ,
    name : string ,
    category : string ,
    price : number,
    rating: number,
    available:string,
    description:string,
    weight: number,
    imagePath: string,
    categoryProduct: string,
    supplier: number,
    shelf: number,
    feedback: number,
    promotion: number

    ){  this.id= id ;
        this.quantityProduct=quantityProduct;
        this.productofthemonth = productofthemonth ;
        this.code = code ;
        this.name=name ;
        this.category =category ;
        this.price= price;
        this.rating=rating;
        this.available=available;
        this.description=description;
        this.weight=weight;
        this.imagePath=imagePath;
        this.categoryProduct=categoryProduct;
        this.supplier=supplier;
        this.shelf=shelf;
        this.feedback=feedback;
        this.promotion=promotion;
    }
}