import React from 'react';
import { YellowBox } from 'react-native';
import createRouter from './routes';
import { Provider } from 'react-redux';
YellowBox.ignoreWarnings(['Possible Unhandled Promise Rejection']);

import store from './store';

const Routes = createRouter();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
