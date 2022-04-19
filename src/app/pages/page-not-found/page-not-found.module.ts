import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PageNotFoundComponent } from './page-not-found.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageNotFoundComponent,
      },
    ]),
  ],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
})
export class PageNotFoundModule { }
