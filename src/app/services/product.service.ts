import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { priceUrl,categoryUrl, productUrl } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {  



  constructor(private http: HttpClient) { }

  getProducts(category:number, price:number): Observable<Product[]> {
    if(category){
      return this.getProductsbyCategory(category);
    }
    if(price){
      return this.getProductsbyPrice(price);
    }
    else
    return this.http.get<Product[]>(productUrl);
  }

  getProductsbyPrice(price:number): Observable<Product[]> {
    return this.http.get<Product[]>(priceUrl+price);
  }

  getProductsbyCategory(category:number): Observable<Product[]> {
    return this.http.get<Product[]>(categoryUrl+category);
}
}

 
