"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var cartActions = require("./store/cart.actions");
var CartComponent = /** @class */ (function () {
    function CartComponent(store, accountService) {
        this.store = store;
        this.accountService = accountService;
        this.cartTotal = this.store.select(function (store) { return store.cartList.total; });
        this.isAuthenticated = false;
        this.isLoaded = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartProducts = this.store.select(function (store) { return store.cartList.addedItems; });
        this.cartTotal.subscribe(function (currentTotal) {
            _this.total = currentTotal;
            _this.isLoaded = !!currentTotal;
        });
        this.userSub = this.accountService.user.subscribe(function (user) {
            _this.isAuthenticated = !!user;
        });
    };
    CartComponent.prototype.onDelete = function (cartProductId) {
        this.store.dispatch(new cartActions.RemoveItem(cartProductId));
    };
    CartComponent.prototype.addQuantity = function (cartProductId) {
        this.store.dispatch(new cartActions.AddQuantity(cartProductId));
    };
    CartComponent.prototype.subQuantity = function (cartProductId) {
        this.store.dispatch(new cartActions.SubQuantity(cartProductId));
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
