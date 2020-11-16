import { Action } from '@ngrx/store';

export const ADD_CART = '[Cart] Add Cart';
export const REMOVE_ITEM = '[Cart] Remove Item';
export const ADD_QUANTITY = '[Cart] Add Quantity';
export const SUB_QUANTITY = '[Cart] Sub Quantity';
export const CLEAR_CART = '[Cart] Clear Cart';


export class AddCart implements Action {
  readonly type = ADD_CART;

  constructor(public data: { _id: string; quantity: number; price: number; }) {}
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;

  constructor(public id: string) {}
}

export class AddQuantity implements Action {
  readonly type = ADD_QUANTITY;

  constructor(public id: string ) {}
}

export class SubQuantity implements Action {
  readonly type = SUB_QUANTITY;

  constructor(public id: string ) {}
}

export class ClearCart implements Action {
  readonly type = CLEAR_CART;
}


export type CartActions =
  | AddCart
  | RemoveItem
  | AddQuantity
  | SubQuantity
  | ClearCart;
