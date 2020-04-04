import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms/forms.service';
import { FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../services/transaction/transaction.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  subtotal = 0
  total = 0
  products: any
  panel = 1
  provinces: any = false
  shipping = 0
  information: any
  payment: any
  showConfirmationStatus = false;
  
  constructor(private forms: FormsService, private builder: FormBuilder, private transaction: TransactionService) { }

  ngOnInit() {
    this.products = Object.values(localStorage).map(data => {
      data = JSON.parse(data)
      data.quantity = 1
      data.original_price = data.price
      return data
    })

    this.getSubTotal()
    let hasMac = false;
    let hasiPhone = false;

    this.products.forEach(product => {
      if (product.category.includes('Macbook'))
        hasMac = true
      if (product.category.includes('iPhone'))
        hasiPhone = true
    })

    this.information = this.builder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      mobile_number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      delivery_address: ['', Validators.required],
      delivery_province: ['', Validators.required],
    })

    this.information.get('delivery_province').valueChanges.subscribe(data => {
      let province = this.provinces.find(province => province.province_code == data)
      this.shipping = parseInt(province.shipping_fee)
      this.getTotal()
    })

    this.payment = this.builder.group({
      mode_of_payment: ['', Validators.required]
    })

    this.forms.getProvinces(hasMac && hasiPhone ? 'LARGE' : 'SMALL')
    .subscribe(data => {
      this.provinces = data
    })
  }

  up(product) {
    product.quantity++
    this.changePrice(product)
  }

  down(product) {
    if (product.quantity > 1) {
      product.quantity--
      this.changePrice(product)
    }
  }

  checkCart() {
    return localStorage.length
  }

  changePrice(product) {
    product.price = product.quantity * product.original_price
    this.getSubTotal()
  }

  getSubTotal() {
    this.subtotal = this.products.reduce((sum, {price}) =>  sum + price, 0)
    this.getTotal()
  }

  getTotal() {
    this.total = this.subtotal + this.shipping
  }

  remove(product) {
    this.products.splice(product, 1)
    localStorage.removeItem(product.product_id)
  }

  changePanel(panel) {
    this.panel = panel
  }

  checkPanel() {
    return this.panel
  }

  checkInformation() {
    // if (this.information.valid) 
      this.changePanel(3)
  }

  checkPaymentMethod() {
    // if (this.payment.valid)
      this.confirm()
  }

  confirm() {
    // let form = {
    //   items: [
    //     ...this.products
    //   ],
    //   transaction: {
    //     ...this.information.value, 
    //     ...this.payment.value, 
    //     total_price: this.subtotal, 
    //     shipping_fee: this.shipping,
    //     shipping_id: this.provinces.find(province => province.province_code = this.information.get('delivery_province').value).shipping_id
    //   }
    // }

    this.showConfirmationStatus = true;
    // this.transaction.confirm(form)
    // .subscribe(data => {
    //   console.log(data);
    // })
  }
}
