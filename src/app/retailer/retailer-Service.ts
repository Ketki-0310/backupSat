
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retailer } from './retailer';
import { Product } from '../product/product';
import { ResponseDto } from '../response';



@Injectable()

export class RetailerService {
   
    
constructor(private http:HttpClient){

}
    verifyMe(uri:string, cerdentials : Retailer):Observable<ResponseDto>{

     
        //our code to be communicated with the server will be here
     return this.http.post<ResponseDto>(uri,cerdentials);
     
      }
      AddMe(uri:string, product:Product):Observable<ResponseDto>{
        return this.http.post<ResponseDto>(uri,product);

      }

      DeleteMe(uri:string, name:string):Observable<ResponseDto>{
        return this.http.post<ResponseDto>(uri,JSON.stringify(name));       //done stringfy if you want you can change

      }
    
}