import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { ProductService } from '../../service/product.service';
import { AccountService } from '../../service/account.service';
import * as fromApp from '../../store/app.reducer';
import * as CartActions from '../cart/store/cart.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  currentProduct = null;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private productService: ProductService,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.paramMap.get('id'));
    this.userSub = this.accountService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  getProduct(id: string): void {
    this.productService.getProduct(id)
      .subscribe(
        data => {
          this.currentProduct = data;
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.currentProduct._id)
      .subscribe(
        response => {
          this.router.navigate(['/products/all-products']);
        },
        error => {
          console.log(error);
        });
  }

  addCart(): void{
    this.store.dispatch( new CartActions.AddCart(this.currentProduct));
    alert('Product Added to Cart');
  }
}
