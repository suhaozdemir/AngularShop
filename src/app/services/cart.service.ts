import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { HttpClient } from '@angular/common/http'; 
import { cartUrl } from 'src/config/api';
import { Product } from '../models/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, {product});
  }

  removeProductFromCart(product: Product) {
    return this.http.delete(cartUrl + '/' + product.id);
  }

  getCartItems(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((cartResult: any[]) => {
        let cartItems: CartItem[] = [];

        for(let cartItem of cartResult){
          
        let productExists = false

        //sepetteki urun id ile normal urun idsi kiyaslanir boylece quantity arttirilir
        for (let i in cartItems) {
          if (cartItems[i].productId === cartItem.product.id) {
            cartItems[i].qty++
            productExists = true
            break;
          }
        }
      
        //urun varsa pushlanir
        if (!productExists) {
          cartItems.push(new CartItem(cartItem.id, cartItem.product))
        }
      }        
        return cartItems;
      })
    );
  }


}
