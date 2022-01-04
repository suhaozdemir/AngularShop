import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prices } from '../models/prices';
import { pricesUrl} from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  addPrice(price:Prices): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post(pricesUrl, price);
  }

  getPrices() : Observable<Prices[]>{
    return this.http.get<Prices[]>(pricesUrl);
  }
}
