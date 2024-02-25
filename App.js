import React from 'react';
import {StatusBar} from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/Index';
import firebase from './FireBase';

export default function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#ff66c4'/>
      <Routes user={user}/>
    </NavigationContainer>
  );
}

