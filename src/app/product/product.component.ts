import { Component, OnInit } from '@angular/core';
import { ProductService } from './product-service';
import { Product } from './product';
@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls:['./css/bootstrap.min.css','./css/mdb.min.css']
    
  })

export class ProductComponent implements OnInit {
    products: Product[];

    constructor(public ps: ProductService) {

    }

    ngOnInit() {
        
    }
    
    
}





