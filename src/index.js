import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes';

YellowBox.ignoreWarnings(['Possible Unhandled Promise Rejection']);

export default function App() {
  return <Routes />;
}
