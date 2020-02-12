import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { IphoneComponent } from './shop/iphone/iphone.component';
import { MacbookComponent } from './shop/macbook/macbook.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop/iphone-case',
    component: IphoneComponent
  },
  {
    path: 'shop/macbook-skins',
    component: MacbookComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
