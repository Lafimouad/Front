export class Shelf {
  idShelf: number;
  typeShelf: string ;
  description: string;

  constructor(idshelf: number, typeshelf: string, description: string) {
    this.idShelf = idshelf;
    this.typeShelf = typeshelf;
    this.description = description;

  }
}
