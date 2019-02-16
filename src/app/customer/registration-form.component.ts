import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Registration } from './registration-form';
import { CustomerService } from './customer-service';
import { address } from './addres';
import { Router } from '@angular/router';
import { ResponseDto } from '../response';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'registration',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})


export class RegistrationComponent {
  cerdentials: Registration = new Registration();
  response: ResponseDto = new ResponseDto();
  constructor(public cs: CustomerService, private router: Router) {


  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  AddCustomer() {

    let url3 = 'http://localhost:8486/customer/add';
    this.cs.AddMe(url3, this.cerdentials).subscribe(data => {
      this.response = data;
      if (this.response.response == "ADDED")
        alert("Registration Successfull..now please login." + this.response.response);
      else
        alert("Something went wrong...please try again later");

    });

  }

}
