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


  cartItems = Array(); 

  cartTotal = 0;

  constructor(private msgService: MessengerService,
    private cartService: CartService) { }

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
     this.cartItems = items;
     this.calculateCartTotal();
   })
 }
 
calculateCartTotal(){
  this.cartTotal = 0
  this.cartItems.forEach(item => {
    this.cartTotal += (item.qty * item.price)
  })
}

}
