import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Prices } from 'src/app/models/prices';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }
  title = "Categories"
  categories: Category[] = [
    {id: 1, name: "iPhone"},
    {id: 2, name: "Xiaomi"},
    {id: 3, name: "Samsung"},
    {id: 4, name: "Vivo"},
    {id: 5, name: "Nokia"},
  ];

  prices: Prices[] = [
    {price: 1000},
    {price: 700},
    {price: 600},
    {price: 500},
    {price: 350},
    {price: 100},
    {price: 1},
  ];
  

  ngOnInit(): void {
  }

}
