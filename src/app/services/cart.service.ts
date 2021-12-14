import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { HttpClient } from '@angular/common/http'; 
import { cartUrl } from 'src/config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl);
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, {product});
  }
}
