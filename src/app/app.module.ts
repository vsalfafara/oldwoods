import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IphoneComponent } from './shop/iphone/iphone.component';
import { MacbookComponent } from './shop/macbook/macbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IphoneComponent,
    MacbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
