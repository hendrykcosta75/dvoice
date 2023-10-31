import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB84sdGVpYEJWGxxK790__B9tioJixWXjY",
    authDomain: "autenticacaodvoice.firebaseapp.com",
    projectId: "autenticacaodvoice",
    storageBucket: "autenticacaodvoice.appspot.com",
    messagingSenderId: "885343269960",
    appId: "1:885343269960:web:047187a43960923089d47d",
    measurementId: "G-5S3RGSJBPR"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase;
  
  