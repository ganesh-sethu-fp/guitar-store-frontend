import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';


import {DataService} from '../app/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { GuitarFormComponent } from './components/guitar-form/guitar-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProductItemComponent,
    
    ProductDetailComponent,
    CheckoutComponent,
    GuitarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
