import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
    const [texto, setTexto] = useState('Digite algo para eu falar ')
    const options = {
        voiceID: 'com.apple.ttsbundle.Samantha-compact',
      };
    
    function speak(){
        Speech.speak(texto, options)
    }
    function speak2(){
        Speech.speak(texto, {
            language: 'en-us'
        })
    }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
      style={styles.input}
      onChangeText={e=>setTexto(e)}
      placeholder='Digite algo'/>

      <Button title="Falar português"
      onPress={speak}/>

    <Button title="Falar inglês"
      onPress={speak2}/>
    
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#121212',
    borderRadius: 10,
    margin: 10,
    color: '#000',
    fontSize: 20,
  }
});
