import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopHomepageComponent } from './shop-homepage.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShopHomepageComponent,
      },
    ]),
  ],
  declarations: [ShopHomepageComponent],
  exports: [ShopHomepageComponent],
})
export class ShopHomepageModule { }
