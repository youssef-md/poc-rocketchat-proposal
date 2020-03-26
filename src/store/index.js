import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { audio } from './reducers/audio';
import audioSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(audio, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(audioSaga);

export default store;
