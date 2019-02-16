import { Retailer } from '../retailer/retailer';

export class Product{
    constructor(
                public product_id?: number,
                public name?:string,
                public quantity?: number,
                public description?:string,
                public imagePath?:string,
                public price?:number,
                public category?:string,
                public retailer?:Retailer
                ){

     }
}
