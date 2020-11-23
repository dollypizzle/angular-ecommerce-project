import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from '../shared/auth.guard';

export const ProductRoutes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: 'all-products',
        component: ProductListComponent,
      },
      {
        path: 'add-product',
        component: AddProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: ProductDetailComponent,
      },
      {
        path: 'edit/:id',
        component: EditProductComponent,
        canActivate: [AuthGuard]
      }
    ],
  },
];
