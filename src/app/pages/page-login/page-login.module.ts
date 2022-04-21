import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageLoginComponent,
      },
    ]),
  ],
  declarations: [PageLoginComponent],
  exports: [PageLoginComponent],
})
export class PageLoginModule { }
