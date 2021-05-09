export class Product{
    id: number;
	name: string;
	description: string;
    quantityProduct:number;
    productofthemonth:boolean=false;
    code:string;
	price: number;
	image_URL: string;
    available:boolean=true;
    weight:number;
    imagePath:string;
    category:string;

    constructor(id: number, name: string, description: string,quantityProduct:number,productofthemonth:boolean=false,code:string,price: number,
        image_URL: string,available:boolean,weight:number,imagePath:string,category:string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantityProduct = quantityProduct;
        this.productofthemonth = productofthemonth;
        this.code = code;
        this.price = price;
        this.image_URL = image_URL;
        this.available = available;
        this.weight = weight;
        this.imagePath = imagePath;
        this.category = category;
    
     }

}