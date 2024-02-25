
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, StatusBar} from 'react-native';
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../FireBase';


export default function App() {
 
  const [Email, setEmail]= useState('')
 
  const navigation = useNavigation();

  const RecuperarSenha = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(Email)
      .then(() => {
        Alert.alert('Email enviado', 'Verifique sua caixa de entrada para redefinir sua senha.');
      })
      .catch((error) => {
        Alert.alert('Erro ao enviar email', error.message);
      });
  };

  
  return (
    <SafeAreaView style={styles.container}>

      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerBemVindo}>
        <Text style={styles.mensagem}>Bem-Vindo</Text>
      </Animatable.View>
      
      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
        
        <Text style={styles.title}>Digite Seu Email</Text>
        <TextInput placeholder='Email' style={styles.input} onChangeText={(text)=> setEmail(text)}/>

       
        <TouchableOpacity style={styles.botao} onPress={() => RecuperarSenha()}>
          <Text style={[styles.RegistrarText, {color: '#fff'}]}>Recuperar Senha</Text>
        </TouchableOpacity>

      
      

      </Animatable.View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff66c4',
  },
  containerBemVindo:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',

  },
  mensagem:{
    fontSize: 28,
    fontWeight: 'bold',

  },
  containerForm:{
    backgroundColor: '#fff',
    flex:1,
    borderTopLeftRadius:25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 20,
    marginTop: 28,
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  botao:{
    backgroundColor:'#ff66c4',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },

  RegistrarText:{
    color: '#ff66c4',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textVerSenha:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#a1a1a1',
    marginTop: 5,
    marginLeft: 300,
  },

  recoverText: {
    color: 'blue',
    textDecorationLine: 'underline',
  }

});