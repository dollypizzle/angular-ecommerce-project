"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckoutComponent = void 0;
var core_1 = require("@angular/core");
var cartActions = require("../cart/store/cart.actions");
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(store) {
        this.store = store;
        this.checkTotal = this.store.select(function (store) { return store.cartList.total; });
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkProducts = this.store.select(function (store) { return store.cartList.addedItems; });
        this.checkTotal.subscribe(function (currentTotal) {
            _this.total = currentTotal;
        });
    };
    CheckoutComponent.prototype.onOrder = function () {
        this.store.dispatch(new cartActions.ClearCart());
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.css']
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;
