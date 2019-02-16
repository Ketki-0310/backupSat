import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product/product-service';
import { Cart } from '../product/cart';
import { ResponseDto } from '../response';

@Component({
  selector: 'cart-page',
  templateUrl: 'cart-page.component.html',
  //styleUrls: ['../css/bootstrap.min.css']
  styleUrls: ['./../css/bootstrap.min.css']
  
})

export class CartComponent implements OnInit {
  

  title: string = "List of Products"
msg:ResponseDto;
  products:Cart;
  total:number;
  myFunction()
  {
    this.router.navigate(['./productdetails']);
    //RouterLink:'./productdetails';
  }

  constructor(private router: Router,private productService:ProductService) {

    
    // let p1 = new Cart("Skate", 1000, "assets/tree.jpg");
    // let p2 = new Cart("Bats", 5000, "assets/fire.jpg");
    // let p3 = new Cart("Mobile", 15000, "assets/sky.jpeg");
    // let p4 = new Cart("Mobile", 15000, "assets/cresent.jpg");
    // let p5 = new Cart("Mobile", 15000, "assets/moon.jpg");
    // this.total=p1.price+p2.price+p3.price+p4.price+p5.price;
    // this.products = [p1, p2, p3, p4, p5];
  }
  ngOnInit() {
    this.products=this.productService.cart;
    console.log(this.products.totalAmount);
  }


  sendCart(){
    console.log(name);
        let url = 'http://localhost:8486/cart/add';
        this.productService.sendCart(url,this.products).subscribe(data => {
            this.msg = data;
            alert(this.msg.response);
            this.router.navigate(['./payment-page']);
        });
  }
}