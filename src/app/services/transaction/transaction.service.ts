import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { BehaviorSubject } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private api = environment.api
  itemValue = new BehaviorSubject(this.setCartItems);

  constructor(private http: HttpClient) { }

  getCartItemCount() {
    return localStorage.length
  }

  setCartItems(id, item) {
    this.itemValue.next(item)
    localStorage.setItem(id, item)
  }

  confirm(form) {
    return this.http.post(`${this.api}/confirm`, form);
  }
}
