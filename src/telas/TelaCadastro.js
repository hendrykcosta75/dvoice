
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useState } from 'react';

export default function App() {
    const [VerSenha, setVerSenha]= useState(true)
  return (
    <SafeAreaView style={styles.container}>

      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerBemVindo}>
        <Text style={styles.mensagem}>Cadastro</Text>
      </Animatable.View>
      
      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
        
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder='Digite um email...' style={styles.input}/>

        <Text style={styles.title}>Senha</Text>
        <TextInput  secureTextEntry={VerSenha} placeholder='Sua senha' style={styles.input}/>

        <Text style={styles.title}>Confirme a sua senha</Text>
        <TextInput  secureTextEntry={VerSenha}  placeholder='Confirmar senha' style={styles.input}/>

        <TouchableOpacity onPress={()=> setVerSenha(!VerSenha)}>
          <Text style = {styles.textVerSenha} >Ver Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={[styles.RegistrarText, {color: '#fff'}]}>Cadastrar</Text>
        </TouchableOpacity>

      </Animatable.View>
      
    </SafeAreaView>
  );
}
//componetizar os imputs e botões
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