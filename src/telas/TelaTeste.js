import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,  TextInput, Alert, TouchableOpacity, Image} from 'react-native';
import{Feather, Ionicons} from 'react-native-vector-icons';
import * as Speech from 'expo-speech';
import firebase from '../../FireBase';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

import { getDatabase, ref, set, push, onValue } from "firebase/database";


const db = getDatabase();


export default function App() {

    const usuario = firebase.auth().currentUser.email;
    const [opcao, setOpcao]= useState(false);
    
    const navigation = useNavigation();
    const options = {
      voiceID: 'com.apple.ttsbundle.Samantha-compact',
      rate: 0.6,
    };

    const user = firebase.auth().currentUser;
    const path = `users/${user.uid}/palavras`;
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const dbRef = ref(db, path);
      const fetchData = onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (val) {
          const textos = Object.values(val).map(item => item.texto);
          setData(textos);
        } else {
          setData([]);
        }
      });
  
      return () => {
        fetchData();
      };
    }, []);

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
    
    function speak(text){
        Speech.speak(text,options)
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

        <Text style={[styles.textUsuario, { color: '#ff66c4', fontSize: 30}]}>Histórico</Text>
      
        <View style={[styles.Historicocontainer, { height: Math.max(50, data.length * 44) }]}>
            {data.length > 0 ? (
                    data.map((texto, index) => (
                   
                    <View style={styles.itemContainer} key={index}>
                        <Text style={styles.textUsuario} key={index}>{texto}</Text>
                        <TouchableOpacity style={styles.image} onPress={() => speak(texto)}>
                            <Image source={require('../../assets/volume.png')} style={[styles.image, { tintColor: '#ff66c4' }]} />
                        </TouchableOpacity>
                    </View>
    
                    ))
                ) : (
                    <Text style={styles.textUsuario}>Sem historico</Text>
                )}
        </View>
   
     
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
  Historicocontainer:{
    width: '90%',
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
  },
  image: {
    width: 20,
    height: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10, // Espaço entre os itens
  }
});