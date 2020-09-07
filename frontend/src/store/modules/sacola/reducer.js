import produce from 'immer';
import { ActionTypes } from './types';

const INITIAL_STATE = {
  items: [
    {
      product: {
        id: '',
        owner: '',
        title: '',
        state: '',
        size: '',
        color: '',
        price: '',
        reserve: '',
      },
      quantity: '',
    },
  ],
  failedStockCheck: [],
};

const sacola = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;
        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id,
        );
        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }

      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productID);
        break;
      }

      case ActionTypes.reserveProductToTryOn: {
        const { product } = action.payload;
        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id,
        );
        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].reserve = true;
        }
      }

      case ActionTypes.removeProductOfTheCart: {
        const { product } = action.payload;
        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id,
        );
        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity--;
        } else {
          draft.items.splice(productInCartIndex, 1);
        }
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default sacola;
