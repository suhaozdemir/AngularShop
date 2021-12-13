import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product //veri yokken error verebilir

  constructor(private msg: MessengerService) { }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem);
  }

  ngOnInit(): void {
  }

}
