import React from 'react';
import {StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/Index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#ff66c4'/>
      <Routes/>
    </NavigationContainer>
  );
}

