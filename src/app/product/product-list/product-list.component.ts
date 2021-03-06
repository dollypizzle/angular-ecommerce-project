import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { ProductService } from '../../service/product.service';
import { AccountService } from '../../service/account.service';
import * as fromApp from '../../store/app.reducer';
import * as cartActions from '../cart/store/cart.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private productService: ProductService,
    private accountService: AccountService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.readProducts();
    this.userSub = this.accountService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  readProducts(): void {
    this.productService.getAll().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addedCart(product): void {
    this.store.dispatch(new cartActions.AddCart(product));
    alert('Product Added to Cart');
  }
}
