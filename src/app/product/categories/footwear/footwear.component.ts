import {OnInit} from '@angular/core';
import { Component } from "@angular/core";
import { ProductService } from '../../product-service';
import { Product } from '../../product';

@Component({
    selector : 'footwear-component',
    templateUrl: './footwear.component.html',
    styleUrls:['../../css/bootstrap.min.css','../../css/mdb.min.css']    
   
})

export class FootwearComponent  {
    products: Product[];
    constructor(public ps: ProductService){

    }
    ngOnInit() {
        let url3 = 'http://localhost:8486/product/category/FOOTWARE';
        this.ps.GetMe(url3).subscribe(data => {
            this.products = data;

        });
    }
}