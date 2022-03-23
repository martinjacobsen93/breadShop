import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail';

const App = () => {

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
