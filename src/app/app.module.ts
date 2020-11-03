import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartCalculatorComponent } from './product/cart-calculator/cart-calculator.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './index/footer/footer.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { LoginComponent } from './index/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent,
    CartComponent,
    CheckoutComponent,
    ProductDetailComponent,
    ProductListComponent,
    CartCalculatorComponent,
    IndexComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
