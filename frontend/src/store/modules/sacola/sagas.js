import { all, takeLatest, select, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { addProductToCartSuccess, addProductToCartFailure } from './actions';
import { ActionTypes } from './types';

function* checkProductStock(action) {
  const { product } = action.payload;

  const currentQuantity = yield select((state) => {
    return (
      state.sacola.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  const availableStockResponse = yield call(api.get, `stock/${product.id}`);
  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
]);
