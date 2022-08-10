"use strict";
exports.__esModule = true;
exports.ProductRoutes = void 0;
var product_list_component_1 = require("./product-list/product-list.component");
var cart_component_1 = require("./cart/cart.component");
var product_detail_component_1 = require("./product-detail/product-detail.component");
var add_product_component_1 = require("./add-product/add-product.component");
var edit_product_component_1 = require("./edit-product/edit-product.component");
var checkout_component_1 = require("./checkout/checkout.component");
var auth_guard_1 = require("../shared/auth.guard");
exports.ProductRoutes = [
    {
        path: 'products',
        children: [
            {
                path: 'all-products',
                component: product_list_component_1.ProductListComponent
            },
            {
                path: 'add-product',
                component: add_product_component_1.AddProductComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'cart',
                component: cart_component_1.CartComponent
            },
            {
                path: 'checkout',
                component: checkout_component_1.CheckoutComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: ':id',
                component: product_detail_component_1.ProductDetailComponent
            },
            {
                path: 'edit/:id',
                component: edit_product_component_1.EditProductComponent,
                canActivate: [auth_guard_1.AuthGuard]
            }
        ]
    },
];
