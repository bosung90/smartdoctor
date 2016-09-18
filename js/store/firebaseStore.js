import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0I77RP0Lj2pqYVoeC7mZbjFnZl5L8_uk",
  authDomain: "smart-doctor-6637f.firebaseapp.com",
  databaseURL: "https://smart-doctor-6637f.firebaseio.com",
  storageBucket: "smart-doctor-6637f.appspot.com",
  messagingSenderId: "74220115985",
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const getItemsRef = ()=> {
  const itemsRef = firebaseApp.database().ref().child('items')
  return {itemsRef}
}
