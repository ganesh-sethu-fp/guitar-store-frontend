import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';


// const routes: Routes = [{path:"**",component:AppComponent},
// {path:"/:id",component:ProductDetailComponent, children:[{path:"/checkout",component:CheckoutComponent}]}
// ];
const routes:Routes=[{path:"",component:AllProductsComponent},{path:"checkout/:id",component:CheckoutComponent},
{path:"product-detail/:id",component:ProductDetailComponent},{path:"**",component:AllProductsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }export const
RoutingComponent = [AllProductsComponent,ProductDetailComponent];
