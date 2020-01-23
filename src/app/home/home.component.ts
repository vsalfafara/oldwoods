import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselItem = 1
  items = []

  constructor() { }

  ngOnInit() {
    this.items[0] = true
    this.items[1] = false
    this.items[2] = false
  }

  change(item) {
    this.items = this.items.fill(false)

    this.items[item] = true

    console.log(this.items)
  }

}
