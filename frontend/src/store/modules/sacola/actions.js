import { ActionTypes } from './types';

export function addProductToCartRequest(product) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productID) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productID,
    },
  };
}

export function reserveProductToTryOn(productID) {
  return {
    type: ActionTypes.reserveProductToTryOn,
    payload: {
      productID,
    },
  };
}

export function removeProductOfTheCart(productID) {
  return {
    type: ActionTypes.removeProductOfTheCart,
    payload: {
      productID,
    },
  };
}
