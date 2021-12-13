import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //TODO: Get products from API

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    //TODO: Populate products from an API and return an Observable
    return this.http.get<Product[]>(apiUrl);
  }
}
