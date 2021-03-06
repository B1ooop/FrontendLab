import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'login',
    loadChildren: () => import('../../pages/page-login/page-login.module').then(m => m.PageLoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('../../pages/page-register/page-register.module').then(m => m.PageRegisterModule),
  },
  {
    path: '**',
    loadChildren: () => import('../../pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
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
