import { OnInit } from '@angular/core';
import { Component } from "@angular/core";
import { RetailerService } from './retailer-Service';
import { Retailer } from './retailer';
import { Router } from '@angular/router';
import { ResponseDto } from '../response';

@Component({
    selector: 'retailer-login',
    templateUrl: './retailer-login.component.html',


})
export class RetailerLoginComponent {
    cerdentials: Retailer = new Retailer();
    response: ResponseDto = new ResponseDto();
    constructor(public rs: RetailerService, private router: Router) {
    }
    verifyRetailer() {

        let url3 = 'http://localhost:8486/loginRetailer';
        this.rs.verifyMe(url3, this.cerdentials).subscribe(data => {
            this.response = data;


            if (this.response == "true") {
                this.router.navigate(['./retailer-homepage']);
            }
            else {
                alert('invalid cerdential');
                this.router.navigate(['./retailer-login']);
            }
        });
    }
}


