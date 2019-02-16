
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Retailer } from '../retailer/retailer';
import { ResponseDto } from '../response';


@Injectable()

export class AdminService {


  constructor(private http: HttpClient) {

  }
  validateMe(uri: string, cerdentials: Admin): Observable<ResponseDto> {
    //our code to be communicated with the server will be here
    return this.http.post<ResponseDto>(uri, cerdentials)

  }
  retriveFromServer(uri: string): Observable<Retailer[]> {
    return this.http.get<Retailer[]>(uri)
  }
  deleteMe(url: string): Observable<string> {
    return this.http.get<string>(url);
  }


}