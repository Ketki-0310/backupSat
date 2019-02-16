import { Product } from '../product/product';

export class Retailer {
  constructor(
    public name?: string,
    public email?: string,
    public password?: string,
    public category?: string,
    public product?: Product[]

  ) {

  }
}
