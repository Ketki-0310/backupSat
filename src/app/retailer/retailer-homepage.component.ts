import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from '../product/product';
import { RetailerService } from './retailer-Service';
import  {ResponseDto} from 'src/app/response';

@Component({
    selector: 'retailer-homepage',
    templateUrl: './retailer-homepage.component.html',
    styleUrls:['./retailer-homepage.component.css']
})


export class RetailerHomepage {
    product: Product = new Product();
    response: ResponseDto=new ResponseDto();
    name:string;
    constructor(private rs: RetailerService) {

    }
    AddProduct() {
        console.log("Add Product");
        console.log(this.product.category);
        let url3 = 'http://localhost:8486/product/add';
        this.rs.AddMe(url3, this.product).subscribe(data => {
            this.response = data;
            console.log(this.response.response);
        });

    }
    DeleteProduct() {
        console.log("DeleteProduct  Product");
        console.log(this.name);
        let url3 = 'http://localhost:8486/product/delete';
        this.rs.DeleteMe(url3, JSON.stringify(this.name)).subscribe(data => {
            this.response = data;
            console.log(this.response);
        });

    }


}
