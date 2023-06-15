import { InHouseProduct } from './in-house-product.js';
import { Product } from './product.js';

class Price {
  constructor() {
    this.product1 = new Product();
    this.product2 = new Product();
    this.product3 = new InHouseProduct();

    this.listProducts = [];

    this.listProducts.push(this.product1);
    this.listProducts.push(this.product2);
    this.listProducts.push(this.product3);

    this.listProducts.forEach((p) => {
      if (p instanceof InHouseProduct) {
        console.log('if is called');
        console.log(p.applyExtraDiscount());
      } else {
        console.log('else is called');
        console.log(p.getDiscount());
      }
    });
  }
}

let price = new Price();
