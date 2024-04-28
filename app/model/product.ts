export class Product {
    id: number;
    name: string;
    image: string;
    brand: Brand;
    price: number;
    rate:number
  
    constructor(
      id: number,
      name: string,
      image: string,
      brand: Brand,
      price: number,
      rate:number
    ) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.brand = brand;
      this.price = price;
      this.rate=rate;
    }
  }
  
  class Brand {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }