import { OnInit } from '@angular/core';
import { Component } from "@angular/core";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']

})

export class HeaderComponent implements OnInit {
    isHidden: boolean = true;
    constructor() {


    }

    ngOnInit() {

        // console.log("window");
        // if (JSON.parse(localStorage.getItem('email')).token != null) {

        //     this.isHidden = false;
        //     console.log(JSON.parse(localStorage.getItem('email')));
        //     console.log(JSON.parse(localStorage.getItem('password')));

        // }
        // else{
        //     this.isHidden=true;
        // }


    }
}