"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailComponent = void 0;
// import { addCart } from './../cart/store/cart.actions';
var core_1 = require("@angular/core");
var CartActions = require("../cart/store/cart.actions");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(productService, accountService, route, router, store) {
        this.productService = productService;
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.store = store;
        this.currentProduct = null;
        this.isAuthenticated = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProduct(this.route.snapshot.paramMap.get('id'));
        this.userSub = this.accountService.user.subscribe(function (user) {
            _this.isAuthenticated = !!user;
        });
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (data) {
            _this.currentProduct = data;
        }, function (error) {
            console.log(error);
        });
    };
    ProductDetailComponent.prototype.deleteProduct = function () {
        var _this = this;
        this.productService.deleteProduct(this.currentProduct._id)
            .subscribe(function (response) {
            _this.router.navigate(['/products/all-products']);
        }, function (error) {
            console.log(error);
        });
    };
    ProductDetailComponent.prototype.addCart = function () {
        this.store.dispatch(new CartActions.AddCart(this.currentProduct));
        alert('Product Added to Cart');
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.css']
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
