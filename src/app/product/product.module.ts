import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductRoutes } from './product.routing';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ProductRoutes),
    SharedModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent,
    CartComponent,
    EditProductComponent
  ]
})
export class ProductModule {}
