import { Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const ProductRoutes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'all-products',
        component: ProductListComponent,
      },
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: ':id',
        component: ProductDetailComponent,
      },
      {
        path: 'edit/:id',
        component: EditProductComponent,
      },
    ],
  },
];
