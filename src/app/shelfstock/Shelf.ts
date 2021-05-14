export class Shelf {
  idShelf: number;
  typeShelf: string ;
  description: string;
  image_URL: string;


  constructor(idshelf: number, typeshelf: string, description: string) {
    this.idShelf = idshelf;
    this.typeShelf = typeshelf;
    this.description = description;

  }
}
