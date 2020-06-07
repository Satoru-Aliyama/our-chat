
import firebase from 'firebase/app';
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB27tP0K5kyULPCGJXYsmj5hxWIMZmsdjU",
  authDomain: "udemy-ninja-chat-37bb1.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-37bb1.firebaseio.com",
  projectId: "udemy-ninja-chat-37bb1",
  storageBucket: "udemy-ninja-chat-37bb1.appspot.com",
  messagingSenderId: "831026775695",
  appId: "1:831026775695:web:a8a2b0aa13d022509012fa"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true})

  //export firestore dadabasee

export default firebaseApp.firestore()