import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wishlistUrl } from 'src/config/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getwishList(){
    return this.http.get(wishlistUrl).pipe(
      map((wishResult: any) =>{
        let productIds: any[] = [];
        
        wishResult.forEach((wishItem: { id: any; }) => productIds.push(wishItem.id))
        
        return productIds;
      })
    )
  }

  addToWishList(productId: any){
    return this.http.post(wishlistUrl, { id: productId })
  }

  removeFromWishList(productId: any){
    return this.http.delete(wishlistUrl + '/' + productId)
  }
}
