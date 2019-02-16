import { OnInit } from '@angular/core';
import { Component } from "@angular/core";
import { Product } from '../../product';
import { ProductService } from '../../product-service';
import { Cart } from '../../cart';
import { Item } from '../../item';

@Component({
    selector: 'colthings-component',
    templateUrl: './clothings.component.html',
    styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css']

})

export class ClothingComponent implements OnInit {
    product: Product = new Product();
    products: Product[];
    cart: Cart = new Cart();

    email: string;
    constructor(public ps: ProductService) {

    }

    ngOnInit() {
        let url3 = 'http://localhost:8486/product/category/FASHION';
        this.ps.GetMe(url3).subscribe(data => {
            this.products = data;
            this.cart.totalAmount = 0.0;
        });

    }

    addToCart(product: Product) {
        this.cart.totalAmount = this.cart.totalAmount + product.price;
        this.cart.customerId = JSON.stringify(localStorage.getItem('userId'));
        let item: Item = new Item();

        item.product_id = product.product_id
        item.quantity = 1;
        item.name=product.name;
        console.log("length"+this.cart.items.length);
        if (this.cart.items.length != 0) {
            for (let i of this.cart.items) {
                if (i.product_id == product.product_id) {
                    i.quantity = i.quantity+1;
                    console.log(i.quantity);
                }
                else {
                    this.cart.items.push(item);
                }
            }
        }
        else
            this.cart.items.push(item);
      
        this.ps.cart = this.cart;
    }


}
