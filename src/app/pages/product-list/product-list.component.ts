import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/components/loader/loader.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productList: Product[] = [];

  constructor(
    private apiService: ApiService,
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.loaderService.addLoaderCondition();

    this.apiService.productListGetRequest().subscribe({
      next: (resp) => {
        this.loaderService.removeLoaderCondition();

        this.productList = resp['hydra:member'].map((item: Product) => {
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            img: item.img,
          }
        });

      },
      error: () => {
        this.loaderService.removeLoaderCondition();
      }
    });
  }
}

export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  img: string,
}
