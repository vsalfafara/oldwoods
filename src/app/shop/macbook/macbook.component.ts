import { Component, OnInit } from '@angular/core';
import { MacbookService } from 'src/app/services/shop/macbook/macbook.service';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-macbook',
  templateUrl: './macbook.component.html',
  styleUrls: ['./macbook.component.scss']
})
export class MacbookComponent implements OnInit {

  quantity = 1
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
    private transaction: TransactionService
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
    if (this.productCycle == 0)
      this.productCycle = this.products[this.woodType].length - 1;
    else
      this.productCycle--;
  }

  right() {
    if (this.products[this.woodType].length - 1 == this.productCycle)
      this.productCycle = 0;
    else
      this.productCycle++;
  }

  up() {
    this.quantity++

  }

  down() {
    if (!(this.quantity == 1))
      this.quantity--
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
    this.choice.quantity = this.quantity
    
    if (localStorage.getItem(this.choice.product_id))
      this.snackbarMessage = 'Already in Cart'
    else
      this.transaction.setCartItems(this.choice.product_id, this.stringify(this.choice))

    this.showSnackbar = true;
    let component = this
    setTimeout(() => {
      component.showSnackbar = false
    }, 5000)
  }
}
