import React from 'react';
import createRouter from './routes';
import { Provider } from 'react-redux';

import store from './store';

const Routes = createRouter();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
