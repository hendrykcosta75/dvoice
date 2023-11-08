import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>
        <View style={styles.containerLogo}>
            <Animatable.Image
            animation={"flipInY"}
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode='contain'/>
        </View>
        <Animatable.View delay={600} animation={'fadeInUp'} style={styles.containerForm}>
            <Text style={styles.title} >Welcome! Read and listen to your texts anywhere!</Text>
            <Text style={styles.text} >Log in to get started</Text>
           <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.buttonText}> Access </Text>
        </TouchableOpacity>
        </Animatable.View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  containerLogo:{
    flex: 2,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerForm:{
    flex:1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  logo:{
    width: 600,
    height: 600,
    marginRight: 30,
    marginTop: 100,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text:{
    marginTop: '3%',
    fontSize: 18,
    color: '#a1a1a1'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#ff66c4',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }
});