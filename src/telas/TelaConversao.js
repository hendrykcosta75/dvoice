import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,  TextInput, Alert, TouchableOpacity} from 'react-native';
import{Feather, Ionicons} from 'react-native-vector-icons';
import * as Speech from 'expo-speech';
import firebase from '../../FireBase';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

import { getDatabase, ref, set, push } from "firebase/database";


const db = getDatabase();


export default function App() {

    const usuario = firebase.auth().currentUser.email;
    const [opcao, setOpcao]= useState(false);
    const [texto, setTexto] = useState('Digite por favor')
    const navigation = useNavigation();
    const options = {
      voiceID: 'com.apple.ttsbundle.Samantha-compact',
      rate: 0.6,
    };

   if(opcao === true){
      firebase.auth().signOut(usuario)
      .then(()=>{
        navigation.navigate('Welcome')
      }).catch((error)=>{
        Alert.alert("Erro", "Ocorreu um erro...")
      }) }
    
    function sair(){
      Alert.alert('Sign Out', 'Você quer realmente sair?' ,[
        {
          text: 'Cancel',          
          onPress: ()=> setOpcao(false)
        },
        {
          text: 'Sign Out',
          onPress: ()=> setOpcao(true)
        }])
      
    }
    
    function speak(){
        Speech.speak(texto,options)
        const user = firebase.auth().currentUser;
        push(ref(db, `users/${user.uid}/palavras`), {
          texto,
        })
    }

    
    
  return (
    <>
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#ff66c4'/>
      <View style = {styles.containerUsuario}>
        <Feather name="user" color='#fff' size={40}/>
        <Text style={styles.textUsuario}>{usuario}</Text>
        <TouchableOpacity style={styles.sair} onPress={()=> sair()}>
        <Ionicons name="log-out-outline" color="#fff" size={35}/>
      </TouchableOpacity>
      </View>
  
      <View style={styles.containerLogo}>
            <Animatable.Image
            animation={"flipInY"}
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode='contain'/>
        </View>

      <TextInput
      style={styles.input}
      onChangeText={e=> e ===''?setTexto('Digite por favor'): setTexto(e)}
      placeholder='Digite alguma coisa'
      placeholderTextColor={'#ff66c4'}
      color = {'#ff66c4'} />

        <TouchableOpacity style={styles.botao} onPress={() => speak() }>
          <Text style={styles.RegistrarText}>Falar</Text>
        </TouchableOpacity>
     
    </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: "center",
    justifyContent: 'center',
  },
  containerUsuario:{
    position:'absolute',
    left: 0,
    top: 32,
    height:'10.5%',
    width: '100%',
    backgroundColor: '#ff66c4',
    paddingLeft: 5,
    paddingTop: 10

  },
  containerLogo:{
    
    width: 400,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 500,
    height: 500,
    marginRight: 30,
    marginTop: 100,
  },
  textUsuario:{
    color:'#fff',
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold'
  },
  sair:{
    position: 'absolute',
    right:25,
    marginRight: -15,
    marginTop: 10
  },
  input:{
    width: '90%',
    height: '9%',
    padding: 12,
    borderWidth: 3,
    borderColor:'#ff66c4',
    borderRadius: 10,
    marginTop: 30,
    margin: 10,
    fontSize: 20,
  },
  botao:{
    backgroundColor:'#ff66c4',
    width: '60%',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  RegistrarText:{
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold'
  },
  tabNavigatorContainer: {
    flex: 1, 
    width: '100%', 
  }
});
