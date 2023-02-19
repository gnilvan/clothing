import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWTo0CTRgVfsZXa1xN2_djwMLsogmLot4",
  authDomain: "capstone-lvanni.firebaseapp.com",
  projectId: "capstone-lvanni",
  storageBucket: "capstone-lvanni.appspot.com",
  messagingSenderId: "152724740492",
  appId: "1:152724740492:web:bd126aa7f3b26e41ebdea9"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createAt
      });
    } catch(error) {

    }
  }

  return userDocRef;
};
