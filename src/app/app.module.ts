import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IndexModule,
    CommonModule,
    ProductModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer,  {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictActionWithinNgZone: false,
        strictActionTypeUniqueness: false,
      },
    }),
    // StoreModule.forRoot({ cartList: cartReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
