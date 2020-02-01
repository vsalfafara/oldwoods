import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-macbook',
  templateUrl: './macbook.component.html',
  styleUrls: ['./macbook.component.scss']
})
export class MacbookComponent implements OnInit {

  count = 1

  woodType = "product-1.png"

  constructor() { }

  ngOnInit() {
  }

  changeWoodType(type) {
    this.woodType = type
  }

}
