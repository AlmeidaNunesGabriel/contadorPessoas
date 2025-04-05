import React from 'react';
import { SafeAreaView } from 'react-native';
import Contador from './src/screens/home';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Contador />
    </SafeAreaView>
  );
}

export default App;
