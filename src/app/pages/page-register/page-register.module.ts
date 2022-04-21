import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRegisterComponent } from './page-register.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageRegisterComponent,
      },
    ]),
  ],
  declarations: [PageRegisterComponent],
  exports: [PageRegisterComponent],
})
export class PageRegisterModule { }
