import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Observable } from 'rxjs';
import * as cartActions from '../cart/store/cart.actions';
import { Router } from '@angular/router';

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
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkProducts = this.store.select(store => store.cartList.addedItems);
    this.checkTotal.subscribe( currentTotal => {
      this.total = currentTotal;
    });
  }

  onClear(): void {
    this.store.dispatch( new cartActions.ClearCart() );
    // this.router.navigate(['/products']);
  }

}
