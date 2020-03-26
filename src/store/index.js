import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { audio } from './reducers/audio';

const store = createStore(audio, applyMiddleware(thunk));

export default store;
