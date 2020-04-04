import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private api = environment.api

  constructor(private http: HttpClient) { }

  confirm(form) {
    return this.http.post(`${this.api}/confirm`, form);
  }
}
