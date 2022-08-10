"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var cartActions = require("../cart/store/cart.actions");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, accountService, store) {
        this.productService = productService;
        this.accountService = accountService;
        this.store = store;
        this.isAuthenticated = false;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readProducts();
        this.userSub = this.accountService.user.subscribe(function (user) {
            _this.isAuthenticated = !!user;
        });
    };
    ProductListComponent.prototype.readProducts = function () {
        var _this = this;
        this.productService.getAll().subscribe(function (data) {
            _this.products = data;
        }, function (error) {
            console.log(error);
        });
    };
    ProductListComponent.prototype.addedCart = function (product) {
        this.store.dispatch(new cartActions.AddCart(product));
        alert('Product Added to Cart');
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
