import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-homepage',
  templateUrl: './shop-homepage.component.html',
  styleUrls: ['./shop-homepage.component.scss']
})
export class ShopHomepageComponent implements OnInit {

  public quant = Array.from(Array(100));

  constructor() { }

  ngOnInit(): void {
  }

}
