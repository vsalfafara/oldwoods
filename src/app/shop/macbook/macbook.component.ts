import { Component, OnInit } from '@angular/core';
import { MacbookService } from 'src/app/services/shop/macbook/macbook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-macbook',
  templateUrl: './macbook.component.html',
  styleUrls: ['./macbook.component.scss']
})
export class MacbookComponent implements OnInit {

  count = 1
  showSnackbar = false
  showTypeStatus = false;
  woodType = 'wood'
  productCycle = 0
  productsDropdown: any
  choice
  snackbarMessage = 'Added to Cart'
  products = {
    wood: [
      'mb-w-1.png',
      'mb-w-2.png',
      'mb-w-3.png',
    ],
    spruce: [
      'mb-s-1.png'
    ]
  }

  constructor(
    private macbbooks: MacbookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.macbbooks.getMacbookProducts()
      .subscribe(data => {
        this.productsDropdown = data
        this.choice = data[0]
      })
  }

  getProduct() {
    return this.products[this.woodType][this.productCycle]
  }

  left() {
    if (!(typeof this.products[this.woodType][this.productCycle - 1] === 'undefined')) {

      this.productCycle--;
      console.log(this.productCycle)
    }
  }

  right() {
    if (!(typeof this.products[this.woodType][this.productCycle + 1] === 'undefined')) {

      this.productCycle++;
      console.log(this.productCycle)
    }
  }

  up() {
    this.count++

  }

  down() {
    if (!(this.count == 1))
      this.count--
  }

  changeWoodType(type) {
    this.productCycle = 0
    this.woodType = type
  }

  showTypes() {
    this.showTypeStatus = !this.showTypeStatus
  }

  stringify(product) {
    return JSON.stringify(product)
  }

  parse(product) {
    return JSON.parse(product)
  }

  changed(event) {
    this.choice = this.productsDropdown.find(product => product.product_id == JSON.parse(event).product_id)
  }

  addToCart() {
    let total = this.choice.price * this.count
    if (localStorage.getItem(this.choice.product_id))
      this.snackbarMessage = 'Already in Cart'
    else
      localStorage.setItem(this.choice.product_id, this.stringify(this.choice))

    this.showSnackbar = true;
    let component = this
    setTimeout(() => {
      component.showSnackbar = false
      console.log('g');
    }, 5000)
  }
}
