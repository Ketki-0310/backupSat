import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Trend Zone';
  welcome:string;
  
   //welcome:string; 
   ngOnInit() {
if(JSON.stringify(localStorage.getItem('email'))!=null){
    this.welcome=JSON.stringify(localStorage.getItem('email'));  }
    else{
    this.welcome="please sign in";}
}
}
