
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, StatusBar, View} from 'react-native';
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
        Alert.alert('Erro', 'Verifique se os dados foram inseridos e tente novamente!')
      } else{
        Alert.alert("Erro", "Email e/ou senha incorretos!")

      }
    })
  }

  const handleForgotPassword = () => {
    navigation.navigate('RecuperarSenha');
  };

  return (
    <SafeAreaView style={styles.container}>

      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerBemVindo}>
        <Text style={styles.mensagem}>Bem-Vindo</Text>
      </Animatable.View>
      
      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
        
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder='Email' style={styles.input} onChangeText={(text)=> setEmail(text)}/>

        <Text style={styles.title}>Senha</Text>

        <TextInput secureTextEntry={VerSenha} placeholder='Digite sua senha' style={styles.input} onChangeText={(text)=> setSenha(text)}/>
      

        <TouchableOpacity onPress={()=> setVerSenha(!VerSenha)}>
          <Text style = {styles.textVerSenha} >Show</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.botao} onPress={() => login()}>
          <Text style={[styles.RegistrarText, {color: '#fff'}]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {backgroundColor: '#fff', borderColor:'#ff66c4', borderWidth: 1}]} onPress={()=> navigation.navigate('Cadastro')}>
          <Text style={styles.RegistrarText}>Cadastro</Text>
        </TouchableOpacity>

      
        <View style={styles.recoverTextContainer}>
          <Text style={{padding: 4}}>Esqueceu sua Senha?</Text>
          <TouchableOpacity onPress={handleForgotPassword}> 
            <Text style={styles.recoverText}>Recuperar Senha</Text>
          </TouchableOpacity>
        </View>
      

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
    color: '#F3069F',
    textDecorationLine: 'underline',
  },
  recoverTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10, 
  }
  

});