import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { audio } from './reducers/audio';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(audio, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
