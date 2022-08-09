import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import * as cartActions from './store/cart.actions';
import { AccountService } from '../../service/account.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Observable<Array<any>>;
  cartTotal: any = this.store.select(store => store.cartList.total);
  total: any;
  isAuthenticated = false;
  private userSub: Subscription;
  isLoaded = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private authService: AccountService
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.store.select(store => store.cartList.addedItems);
    this.cartTotal.subscribe( currentTotal => {
      this.total = currentTotal;
      this.isLoaded = !!currentTotal;
    });
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onDelete(cartProductId): void {
    this.store.dispatch( new cartActions.RemoveItem(cartProductId) );
  }

  addQuantity(cartProductId): void {
    this.store.dispatch(new cartActions.AddQuantity(cartProductId));
  }

  subQuantity(cartProductId): void {
    this.store.dispatch( new cartActions.SubQuantity(cartProductId) );
  }

}
