import { OnInit } from '@angular/core';
import { Component } from "@angular/core";
import { AdminService } from './admin-service';
import { Admin } from './admin';
import { Router } from '@angular/router';
import { ResponseDto } from '../response';

@Component({
    selector: 'admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls:['./admin-login.component.css']
})


export class AdminLoginComponent {
    cerdentials: Admin = new Admin();
    response: ResponseDto;
    constructor(public as: AdminService, private router: Router) {

    }
    verifyAdmin() {
        let url3 = 'http://localhost:8486/admin/verify';
        this.as.validateMe(url3, this.cerdentials).subscribe(data => {
            this.response = data;

            if (this.response.response == "VERIFIED") {

                this.router.navigate(['./admin-homepage']);
            }
            else {

                alert("Please enter valid cerdentials");
                this.router.navigate(['./admin-login']);
            }
        });


    }


}