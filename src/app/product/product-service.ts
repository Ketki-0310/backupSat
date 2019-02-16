import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Cart } from './cart';
import { ResponseDto } from '../response';

@Injectable()
export class ProductService {

  public cart: Cart;

    constructor(private http: HttpClient) {

    }
    AddMe(url:string,product:Product){
        return this.http.post(url,product);
    }
    GetMe(uri: string): Observable<Product[]> {

        return this.http.get<Product[]>(uri);

    }
    sendCart(url:string,cart:Cart):Observable<ResponseDto>{
        return this.http.post<ResponseDto>(url,cart);
    }
}