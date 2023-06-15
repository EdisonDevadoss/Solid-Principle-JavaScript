import { Product } from './product.js';

export class InHouseProduct extends Product {
  applyExtraDiscount() {
    const discount = this.discount * 1.5;
    return discount;
  }
}
