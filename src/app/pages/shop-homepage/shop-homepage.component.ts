import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-homepage',
  templateUrl: './shop-homepage.component.html',
  styleUrls: ['./shop-homepage.component.scss']
})
export class ShopHomepageComponent implements OnInit {



  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  navigateToProductList() {
    this.router.navigate(['product-list'], { relativeTo: this.route });
  }

}
