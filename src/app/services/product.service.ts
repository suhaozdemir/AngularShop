import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoryUrl, productUrl } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {  



  constructor(private http: HttpClient) { }

  getProducts(category:number): Observable<Product[]> {
    if(category){
      return this.http.get<Product[]>(categoryUrl+category);
    }
    else
    return this.http.get<Product[]>(productUrl);
  }
}
