import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCqR98vMWovKs5p907KRVI0Us9p14agBao',
  authDomain: 'messenger-clone-13853.firebaseapp.com',
  databaseURL: 'https://messenger-clone-13853.firebaseio.com',
  projectId: 'messenger-clone-13853',
  storageBucket: 'messenger-clone-13853.appspot.com',
  messagingSenderId: '20041364137',
  appId: '1:20041364137:web:a5e8193b1ce000283f2fb8',
  measurementId: 'G-80KBS4XBP4',
});

const db = firebaseApp.firestore();

export default db;
