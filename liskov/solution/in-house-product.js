import { Product } from './product.js';

export class InHouseProduct extends Product {
  applyExtraDiscount() {
    this.discount = this.discount * 1.5;
  }

  getDiscount() {
    this.applyExtraDiscount();
    return this.discount;
  }
}
