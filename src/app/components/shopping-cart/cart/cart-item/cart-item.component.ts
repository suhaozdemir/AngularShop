import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any

  constructor( private msg: MessengerService,
    private cartService: CartService,) { }

  ngOnInit(): void {
  }

  handleRemoveFromCart(){
    this.cartService.removeProductFromCart(this.cartItem).subscribe(() =>{
      this.msg.sendMsg(this.cartItem)
    })
  }

}
