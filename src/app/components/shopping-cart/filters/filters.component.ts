import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Prices } from 'src/app/models/prices';
import { CategoryService } from 'src/app/services/category.service';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private categoryService : CategoryService,
    private priceService : PriceService) { }
  title = "Categories"
  categories: Category[] = [];
  prices: Prices[] = [];

  getCategories(){
    return this.categoryService.getCategories().subscribe(categoryNames => {
      this.categories = categoryNames;
    });
  }

  getPrices(){
    return this.priceService.getPrices().subscribe(prices => {
      this.prices = prices;
    })
  }  

  ngOnInit(): void {
    this.getCategories();
    this.getPrices();
  }
}
