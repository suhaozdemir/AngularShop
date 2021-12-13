import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject<Product>();

  constructor() { }

  sendMsg(product: any){
    this.subject.next(product); //Trigger an event
  }

  getMsg(){
    return this.subject.asObservable();
  }
}
