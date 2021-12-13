import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //TODO: Get products from API 
  products: Product[] = [
    new Product(1, 'Product 1', '1 Lorem Ipsum Dolor Sit Amet blablabla', 100),
    new Product(2, 'Product 2', '2 Lorem Ipsum Dolor Sit Amet blablabla', 150),
    new Product(3, 'Product 3', '3 Lorem Ipsum Dolor Sit Amet blablabla', 200),
    new Product(4, 'Product 4', '4 Lorem Ipsum Dolor Sit Amet blablabla', 250),
    new Product(5, 'Product 5', '5 Lorem Ipsum Dolor Sit Amet blablabla', 300),
    new Product(6, 'Product 6', '6 Lorem Ipsum Dolor Sit Amet blablabla', 350),
    new Product(7, 'Product 7', '7 Lorem Ipsum Dolor Sit Amet blablabla', 400),
  ]

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from an API and return an Observable
    return this.products
  }
}
