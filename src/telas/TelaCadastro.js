
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useState } from 'react';
import firebase from '../../FireBase';
import {useNavigation} from '@react-navigation/native';

export default function App() {
    const [VerSenha, setVerSenha]= useState(true)
    const [Email, setEmail]= useState('')
    const [Senha, setSenha]= useState('')
    const [ConfirmSenha, setConfirmSenha]= useState('')

    const navigation = useNavigation();
    
    async function cadastrar(){
      if(Senha === ConfirmSenha && Senha!== "" && ConfirmSenha !== "" && Email != ""){
        await firebase.auth().createUserWithEmailAndPassword(Email,Senha)
      .then((value)=> {
        navigation.navigate("Login")
        setEmail('')
        setSenha('')
      })
      .catch((error)=>{
        if(error.code === 'auth/weak-password'){
          Alert.alert('Password', 'Sua senha precisa ter pelo menos 6 caracteres')
        }
        if(error.code === 'auth/invalid-email'){
          Alert.alert('Email', 'Email inválido')
        }
        if(error.code === 'auth/email-already-in-use'){
          Alert.alert("Email", "Seu email já foi cadastrado!")
        }
      })
    } else if(Email === ""|| Senha === ""|| ConfirmSenha == ""){
      Alert.alert('Erro', 'Verifique se os dados foram inseridos e tente novamente!')
    }else{
      Alert.alert('Erro', 'As senhas devem ser iguais!')    }


     }
      

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerBemVindo}>
        <Text style={styles.mensagem}>Sign Up</Text>
      </Animatable.View>
      
      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
        
        <Text style={styles.title}>Email</Text>
        <TextInput  placeholder='Email' style={styles.input} onChangeText={(text)=> setEmail(text)}/>

        <Text style={styles.title}>Password</Text>
        <TextInput  secureTextEntry={VerSenha} placeholder='Your password' style={styles.input} onChangeText={(text)=> setSenha(text)}/>

        <Text style={styles.title}>Verify Password</Text>
        <TextInput  secureTextEntry={VerSenha}  placeholder='Verify Password' style={styles.input} onChangeText={(text)=> setConfirmSenha(text)}/>

        <TouchableOpacity onPress={()=> setVerSenha(!VerSenha)}>
          <Text style = {styles.textVerSenha} >Show</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => cadastrar()}>
          <Text style={[styles.RegistrarText, {color: '#fff'}]}>Create your account</Text>
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
    marginLeft: 300
  }
});