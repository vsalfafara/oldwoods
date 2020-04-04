import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private api = environment.api

  constructor(private http: HttpClient) { }

  getProvinces(size) {
    return this.http.get(`${this.api}/shipping/${size}`)
  }
}
