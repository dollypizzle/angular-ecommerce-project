import * as CartActions from './cart.actions';

export interface State {
  addedItems: Array<any>;
  total: number;
}

const initialState: State = {
  addedItems: [],
  total: 0,
};

export function cartReducer(
  state: State = initialState,
  action: CartActions.CartActions,
): State {
  switch (action.type) {
    case CartActions.ADD_CART:
      const existedItem = state.addedItems.find(
        (item: { _id: string }) => action.data._id === item._id
      );
      if (existedItem) {
        existedItem.quantity ++;
        return {
          ...state,
          total: state.total + action.data.price,
        };
      } else {
        action.data.quantity = 1;
        const newTotal = state.total + action.data.price;

        return {
          ...state,
          addedItems: [...state.addedItems, action.data],
          total: newTotal,
        };
      }
    case CartActions.ADD_QUANTITY:
      const addedItem = state.addedItems.find(
        (item: { _id: string }) => item._id === action.id
      );

      addedItem.quantity += 1;
      const newSum = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newSum,
      };
    case CartActions.REMOVE_ITEM:
      const itemToRemove = state.addedItems.find(
        (item: { _id: string }) => action.id === item._id
      );
      const new_items = state.addedItems.filter(
        (item: { _id: string }) => action.id !== item._id
      );

      const newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    case CartActions.SUB_QUANTITY:
      let addedProduct = state.addedItems.find(
        (item: { _id: string }) => item._id === action.id
      );
      if (addedProduct.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item: { id: string }) => item.id !== action.id
        );
        let newTotal = state.total - addedProduct.price;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };
      } else {
        addedProduct.quantity -= 1;
        let newTotal = state.total - addedProduct.price;
        return {
          ...state,
          addedItems: [...state.addedItems],
          total: newTotal,
        };
      }
    case CartActions.CLEAR_CART:
        return initialState;
    default:
      return state;
  }
}
