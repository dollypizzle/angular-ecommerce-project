"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditProductComponent = void 0;
var core_1 = require("@angular/core");
var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        this.getProduct(this.route.snapshot.paramMap.get('id'));
    };
    EditProductComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (data) {
            _this.currentProduct = data;
        }, function (error) {
            console.log(error);
        });
    };
    EditProductComponent.prototype.updateProduct = function () {
        var _this = this;
        var data = {
            name: this.currentProduct.name,
            description: this.currentProduct.description,
            image: this.currentProduct.image,
            brand: this.currentProduct.brand,
            price: this.currentProduct.price
        };
        this.productService.updateProduct(this.currentProduct._id, data).subscribe(function (response) {
            _this.router.navigate(["/products/" + _this.currentProduct._id]);
        }, function (error) {
            console.log(error);
        });
    };
    EditProductComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-product',
            templateUrl: './edit-product.component.html',
            styleUrls: ['./edit-product.component.css']
        })
    ], EditProductComponent);
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;
