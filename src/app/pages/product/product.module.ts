import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
      },
    ]),
  ],

  declarations: [ProductComponent],
  exports: [ProductComponent],
})
export class ProductModule { }
