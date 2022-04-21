import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MaterialModule } from './material.module';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@NgModule({
  imports: [
    //core
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //libs
    MaterialModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
  ],
  exports: [
    //components
    HeaderComponent,
    FooterComponent,
    LoaderComponent,

    //modules
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService]
})
export class SharedModule { }
