import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prices } from '../models/prices';
import { pricesUrl } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  getPrices() : Observable<Prices[]>{
    return this.http.get<Prices[]>(pricesUrl);
  }
}
