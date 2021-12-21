import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  wishList: number[] = [];

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService
    ) { } //dependency injection

  ngOnInit(): void {
    this.getProducts();
    this.getWishlist();
  }

  getProducts(){
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;      
     })
  }

  getWishlist(){
    this.wishlistService.getwishList().subscribe(productIds => {
      console.log(productIds)
      this.wishList = productIds
    })
  }

}
