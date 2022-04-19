import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { ShopComponent } from 'src/app/components/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full',
  },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('../../pages/shop-homepage/shop-homepage.module').then(m => m.ShopHomepageModule),
      },
      {
        path: 'product-list',
        pathMatch: 'full',
        loadChildren: () => import('../../pages/product-list/product-list.module').then(m => m.ProductListModule),
      },
      {
        path: 'product',
        loadChildren: () => import('../../pages/product/product.module').then(m => m.ProductModule),
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
