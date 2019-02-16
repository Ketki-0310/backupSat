import { OnInit } from '@angular/core';
import { Component } from "@angular/core";
import { Customer } from './customer-login';
import { CustomerService } from './customer-service';
import { Router } from '@angular/router';
import { ResponseDto } from '../response';

@Component({
    selector: 'customer-login',
    templateUrl: './customer-login.component.html',
    styleUrls: ['./customer-login.component.css']

})


export class CustomerLoginComponent {

    cerdentials: Customer = new Customer();
    responsess: ResponseDto = new ResponseDto();

    constructor(public cs: CustomerService, private router: Router) {
    }
    verifyCustomer() {
        //console.log("onclick");
        let url3 = 'http://localhost:8486/customer/verify';
        this.cs.verifyMe(url3, this.cerdentials).subscribe(data => {
            this.responsess = data;
            if (this.responsess.response == "VERIFIED") {
                console.log("inside if");
                window.localStorage.setItem('email', this.cerdentials.email);
                window.localStorage.setItem('password', this.cerdentials.password);
                window.localStorage.setItem('userId',""+this.responsess.userId);
                
                console.log(JSON.stringify(localStorage.getItem('userId')));
              this.router.navigate(['./colthings-component']);
            }
            else {
                console.log("inside else");
                this.router.navigate(['./customer-login']);
            }
        });
    }
}