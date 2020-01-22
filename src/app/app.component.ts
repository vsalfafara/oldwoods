import { Component } from '@angular/core';

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

  toggleNav() {
    this.openNav = !this.openNav
    document.body.classList.toggle('hide-overflow')
  }

  closeNav() {
    this.openNav = false
    document.body.classList.remove('hide-overflow')
  }

  toggleShopDrawerDesktop($event) {
    console.log($event.type)
    this.openShopDrawerDesktop = $event.type == 'mouseover';
  }

  toggleShopDrawerMobile() {
    console.log('click')
    this.openShopDrawerMobile = !this.openShopDrawerMobile;
  }

}
