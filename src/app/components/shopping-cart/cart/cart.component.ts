import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //Sepetteki urunler
  cartItems = Array(); 

  cartTotal = 0;

  constructor(private msgService: MessengerService,
    private cartService: CartService) { }

  //Init durumunda sepetteki urunlerin toplam fiyatini gostermek icin
  ngOnInit() {
    this.handleSubscription();    
    this.getCartItems();
 }

 handleSubscription(){
  this.msgService.getMsg().subscribe((product: Product) => {
    this.getCartItems();
  })
 }

 getCartItems(){
   this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
     console.log(items)
   })
 }
 
 //Sepete urun ekleme fonksiyonu 
 addProductToCart(product: Product) {

  let productExists = false

  //sepetteki urun id ile normal urun idsi kiyaslanir boylece quantity arttirilir
  for (let i in this.cartItems) {
    if (this.cartItems[i].productId === product.id) {
      this.cartItems[i].qty++
      productExists = true
      break;
    }
  }

  //urun varsa pushlanir
  if (!productExists) {
    this.cartItems.push({
      productId: product.id,
      productName: product.name,
      qty: 1,
      price: product.price
    })
  }
  // if (this.cartItems.length === 0) {
  //   this.cartItems.push({
  //     productId: product.id,
  //     productName: product.name,
  //     qty: 1,
  //     price: product.price
  //   })
  // } else {
  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].productId === product.id) {
  //       this.cartItems[i].qty++
  //     } else {
  //       this.cartItems.push({
  //         productId: product.id,
  //         productName: product.name,
  //         qty: 1,
  //         price: product.price
  //       })
  //     }
  //   }
  // }

  this.calculateCartTotal();
}

calculateCartTotal(){
  this.cartTotal = 0
  this.cartItems.forEach(item => {
    this.cartTotal += (item.qty * item.price)
  })
}

}
