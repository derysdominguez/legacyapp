import * as firebase from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDYmaGqzPXpJMHGhul2IFWGov53A4wP2SM",
  authDomain: "legacygg-d11b9.firebaseapp.com",
  projectId: "legacygg-d11b9",
  storageBucket: "legacygg-d11b9.appspot.com",
  messagingSenderId: "1012309785022",
  appId: "1:1012309785022:web:c93c8403729a7daa3221ef"
};

export const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth();

