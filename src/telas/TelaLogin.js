
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, StatusBar} from 'react-native';
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../FireBase';


export default function App() {
  const [VerSenha, setVerSenha]= useState(true)
  const [Email, setEmail]= useState('')
  const [Senha, setSenha]= useState('')

  const navigation = useNavigation();

  async function login(){
    await firebase.auth().signInWithEmailAndPassword(Email,Senha)
    .then((value)=> {
      navigation.navigate("Conversor")
      setEmail('')
      setSenha('')
    })
    .catch((error)=>{
      if(Email === ""|| Senha === ""){
        Alert.alert('Erro', 'Check if the data was entered and try again')
      } else{
        Alert.alert("Erro", "Incorrect email or password!")

      }
    })
  }
  return (
    <SafeAreaView style={styles.container}>

      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerBemVindo}>
        <Text style={styles.mensagem}>Welcome</Text>
      </Animatable.View>
      
      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
        
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder='Email' style={styles.input} onChangeText={(text)=> setEmail(text)}/>

        <Text style={styles.title}>Password</Text>

        <TextInput secureTextEntry={VerSenha} placeholder='Your password' style={styles.input} onChangeText={(text)=> setSenha(text)}/>
       
        <TouchableOpacity onPress={()=> setVerSenha(!VerSenha)}>
          <Text style = {styles.textVerSenha} >Show</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.botao} onPress={() => login()}>
          <Text style={[styles.RegistrarText, {color: '#fff'}]}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {backgroundColor: '#fff', borderColor:'#ff66c4', borderWidth: 1}]} onPress={()=> navigation.navigate('Cadastro')}>
          <Text style={styles.RegistrarText}>Sign Up</Text>
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
  }
});