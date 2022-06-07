import React from 'react';
import {LogBox} from 'react-native';
import StockProvider from './src/context/StockContext';
import HomeScreen from './src/screens/Home';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <StockProvider>
      <HomeScreen />
    </StockProvider>
  );
};

export default App;
