import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAMse9ggH1rBp8fqQ53Q01EnuoU-ehglI4",
  authDomain: "fir-ecommerce-ce1e7.firebaseapp.com",
  databaseURL: "https://fir-ecommerce-ce1e7.firebaseio.com",
  projectId: "fir-ecommerce-ce1e7",
  storageBucket: "fir-ecommerce-ce1e7.appspot.com",
  messagingSenderId: "607381564497",
  appId: "1:607381564497:web:565e248d32b01d90bddc70"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle= () => auth.signInWithPopup(provider)
export default firebase