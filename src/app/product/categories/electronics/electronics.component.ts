import {OnInit} from '@angular/core';
import { Component } from "@angular/core";
import { Product } from '../../product';
import { ProductService } from '../../product-service';

@Component({
    selector : 'electronics-component',
    templateUrl: './electronics.component.html',
    styleUrls:['../../css/bootstrap.min.css','../../css/mdb.min.css']
   
})

export class ElectronicsComponent  {

    products: Product[];
    

    constructor(public ps: ProductService) {

    }

    ngOnInit() {
        let url3 = 'http://localhost:8486/product/category/HOME_APPLANCES';
        this.ps.GetMe(url3).subscribe(data => {
            this.products = data;

        });
    }
}