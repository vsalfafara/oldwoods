import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MacbookService {

  private api = environment.api

  constructor(
    private http: HttpClient
  ) { }

  getMacbookProducts() {
    return this.http.get(`${this.api}/products/category/2`)
  }
}
