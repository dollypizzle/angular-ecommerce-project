"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.cartReducer = void 0;
var CartActions = require("./cart.actions");
var initialState = {
    addedItems: [],
    total: 0
};
function cartReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CartActions.ADD_CART:
            var existedItem = state.addedItems.find(function (item) { return action.data._id === item._id; });
            if (existedItem) {
                existedItem.quantity++;
                return __assign(__assign({}, state), { total: state.total + action.data.price });
            }
            else {
                action.data.quantity = 1;
                var newTotal_1 = state.total + action.data.price;
                return __assign(__assign({}, state), { addedItems: __spreadArrays(state.addedItems, [action.data]), total: newTotal_1 });
            }
        case CartActions.ADD_QUANTITY:
            var addedItem = state.addedItems.find(function (item) { return item._id === action.id; });
            addedItem.quantity += 1;
            var newSum = state.total + addedItem.price;
            return __assign(__assign({}, state), { addedItems: __spreadArrays(state.addedItems), total: newSum });
        case CartActions.REMOVE_ITEM:
            var itemToRemove = state.addedItems.find(function (item) { return action.id === item._id; });
            var newItems = state.addedItems.filter(function (item) { return action.id !== item._id; });
            var newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
            return __assign(__assign({}, state), { addedItems: newItems, total: newTotal });
        case CartActions.SUB_QUANTITY:
            var addedProduct = state.addedItems.find(function (item) { return item._id === action.id; });
            if (addedProduct.quantity === 1) {
                var newItems_1 = state.addedItems.filter(function (item) { return item.id !== action.id; });
                var newTotal_2 = state.total - addedProduct.price;
                return __assign(__assign({}, state), { addedItems: newItems_1, total: newTotal_2 });
            }
            else {
                addedProduct.quantity -= 1;
                var newTotal_3 = state.total - addedProduct.price;
                return __assign(__assign({}, state), { addedItems: __spreadArrays(state.addedItems), total: newTotal_3 });
            }
        case CartActions.CLEAR_CART:
            return initialState;
        default:
            return state;
    }
}
exports.cartReducer = cartReducer;
