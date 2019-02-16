import { OnInit } from '@angular/core';
import { Component } from "@angular/core";
import { Retailer } from '../retailer/retailer';
import { AdminService } from './admin-service';

@Component({
    selector: 'admin-homepage',
    templateUrl: './admin-homepage.component.html',
    styleUrls: ['./admin-homepage.component.css']
})


export class AdminHomepageComponent {
    retailer: Retailer[]
    // elements:Retailer[];
    name: string;
    deleteMsg: string
    AddRetailer: Retailer;
    constructor(private as: AdminService) {
        let url3 = 'http://localhost:8486/allRetailer';
        this.as.retriveFromServer(url3).subscribe(data => {
            this.retailer = data;
        });
    }

    deleteRetailer(name: string) {
        console.log(name);
        let url = 'http://localhost:8486/DeleteRetailer?name=' + name;
        this.as.deleteMe(url).subscribe(data => {
            this.deleteMsg = data.toString();
            alert(this.deleteMsg);
        });
    }

    // AddRetailer(AddRetailer:Retailer) {

    //     let url = 'http://localhost:8486/DeleteRetailer?name=' + name;
    //     this.as.deleteMe(url).subscribe(data => {
    //         this.deleteMsg = data.toString();
    //         alert(this.deleteMsg);
    //     });

    // }

}