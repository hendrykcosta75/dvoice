import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBV9qZRYgmjgXZd4InMAHPa6xeA1MXUj5k",
    authDomain: "autenticacao-usuario-c6eb5.firebaseapp.com",
    projectId: "autenticacao-usuario-c6eb5",
    storageBucket: "autenticacao-usuario-c6eb5.appspot.com",
    messagingSenderId: "930821960907",
    appId: "1:930821960907:web:df5ccf4b5b274b09b6974e"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase;
  
  