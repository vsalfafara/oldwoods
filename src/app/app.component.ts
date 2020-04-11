import { Component } from '@angular/core';
import { TransactionService } from './services/transaction/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oldwoods'
  openNav = false
  openShopDrawerDesktop = false
  openShopDrawerMobile = false

  constructor(private transaction: TransactionService) {}

  getCount() {
    return this.transaction.getCartItemCount()
  }

  toggleNav() {
    this.openNav = !this.openNav
    document.body.classList.toggle('hide-overflow')
  }

  closeNav() {
    this.openNav = false
    document.body.classList.remove('hide-overflow')
  }

  toggleShopDrawerDesktop($event) {
    this.openShopDrawerDesktop = $event.type == 'mouseover';
  }

  toggleShopDrawerMobile() {
    this.openShopDrawerMobile = !this.openShopDrawerMobile;
  }

}
