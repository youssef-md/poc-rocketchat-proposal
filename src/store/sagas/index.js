import { all } from 'redux-saga/effects';

import audio from './audio';

export default function* rootSaga() {
  return yield all([audio]);
}
