import { all } from 'redux-saga/effects';

import sacola from './sacola/sagas';

export default function* rootSaga() {
  return yield all([sacola]);
}
