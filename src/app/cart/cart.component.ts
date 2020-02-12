import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  counts = []
  individualPrice = []
  total = 0
  products: any
  constructor() { }
  ngOnInit() {
    this.products = Object.values(localStorage).map(data => JSON.parse(data))

    for (let i = 0; i < this.products.length; i++) {
      this.counts.push(1)
      this.individualPrice.push(this.products[i].price)
    }

    this.getTotal()
    console.log(this.products);
  }

  up(index) {
    this.counts[index]++
    this.changePrice(index)
  }

  down(index) {
    if (!(this.counts[index] == 1)) {
      this.counts[index]--
      this.changePrice(index)
    }
  }

  checkCart() {
    return localStorage.length
  }

  changePrice(index) {
    this.individualPrice[index] = this.counts[index] * this.products[index].price
    this.getTotal()
  }

  getTotal() {
    this.total = this.individualPrice.reduce((current, value) => current + value)

  }

  remove(index, product_id) {
    this.products.splice(index, 1)
    localStorage.removeItem(product_id)
  }
}
