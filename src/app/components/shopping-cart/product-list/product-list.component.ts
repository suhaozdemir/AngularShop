import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ActivatedRoute } from '@angular/router';

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
    private wishlistService: WishlistService,
    private activatedRoute: ActivatedRoute
    ) { } //dependency injection

  ngOnInit(): void {
    
    this.getProducts();
    this.getWishlist();
  }

  getProducts(){
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["catID"], params["price"]).subscribe((products) => { 
        this.productList = products;      
       })
    })    
  }

  getWishlist(){
    this.wishlistService.getwishList().subscribe(productIds => {
      this.wishList = productIds
    })
  }

}
