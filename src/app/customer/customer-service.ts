import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Registration } from './registration-form';
import { Customer } from './customer-login';
import { ResponseDto } from '../response';

@Injectable()
export class CustomerService {


  constructor(private http: HttpClient) {

  }
  AddMe(uri: string, cerdentials: Registration):Observable<ResponseDto> {

    return this.http.post<ResponseDto>(uri, cerdentials);

  }
  verifyMe(uri: string, cerdentials: Customer):Observable<ResponseDto> {
    return this.http.post<ResponseDto>(uri, cerdentials);
  }

}