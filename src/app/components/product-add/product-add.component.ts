import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { PriceService } from 'src/app/services/price.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { Prices } from 'src/app/models/prices';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  
  constructor(private formBuilder : FormBuilder,
    private productService : ProductService,
    private categoryService : CategoryService,
    private priceService : PriceService) { }

  ngOnInit(): void {
    this.createAddProductForm();
    this.getCategories();
  }
  
  addProductForm!: FormGroup;
  product!: Product;
  categories: Category[] = [];
  price!: Prices;

  createAddProductForm(){
    this.addProductForm = this.formBuilder.group(
      {
        category:["", Validators.required],
        name:["", Validators.required],
        description:["", Validators.required],
        imageUrl:["", Validators.required],
        price:["", Validators.required],     
      }
    )
  }

  addProduct(){
    if(this.addProductForm.valid){
      this.product = this.addProductForm.value
      this.price = this.addProductForm.get('price')?.value;
      this.productService.addProduct(this.product).subscribe(product => {
        // this.addPrice();
      })
    }
  }

  // addPrice(){
  //   if(this.addProductForm.valid){      
  //     this.priceService.addPrice(this.price).subscribe(price => {
  //       console.log(price);
  //     })
  //   }
  // }

  getCategories(){
    this.categoryService.getCategories().subscribe(category => {
      this.categories = category;
    })
  }  

}
