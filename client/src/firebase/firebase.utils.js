import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAMse9ggH1rBp8fqQ53Q01EnuoU-ehglI4",
  authDomain: "fir-ecommerce-ce1e7.firebaseapp.com",
  databaseURL: "https://fir-ecommerce-ce1e7.firebaseio.com",
  projectId: "fir-ecommerce-ce1e7",
  storageBucket: "fir-ecommerce-ce1e7.appspot.com",
  messagingSenderId: "607381564497",
  appId: "1:607381564497:web:565e248d32b01d90bddc70"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
  const collectionRef  = firestore.collection(collectionKey)
  console.log(collectionRef)
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((acc, nextEl) => {
    acc[nextEl.title.toLowerCase()] = nextEl
    return acc
  },{})
}
export const getCurrentUser = () => {
  return new Promise ((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    },reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
