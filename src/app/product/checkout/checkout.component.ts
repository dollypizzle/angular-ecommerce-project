import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import * as cartActions from '../cart/store/cart.actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkProducts: Observable<Array<any>>;
  checkTotal: any = this.store.select(store => store.cartList.total);
  total: any;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.checkProducts = this.store.select(store => store.cartList.addedItems);
    this.checkTotal.subscribe( (currentTotal: any) => {
      this.total = currentTotal;
    });
  }

  onOrder(): void {
    this.store.dispatch( new cartActions.ClearCart() );
  }

}
