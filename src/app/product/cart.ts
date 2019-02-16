import { Item } from './item';

export class Cart {
constructor(
    public customerId?: string,
    public totalAmount?: number,
    public items?: Item[]
    ){
         this.items=new Array();
    }

    
}