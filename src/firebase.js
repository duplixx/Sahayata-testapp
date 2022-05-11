import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage';
import {getFirestore} from '@firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDbY3cycBdDjVvU1w2zZ1p2IKd03YXK4JU",
    authDomain: "sahayta-test.firebaseapp.com",
    projectId: "sahayta-test",
    storageBucket: "sahayta-test.appspot.com",
    messagingSenderId: "746760557071",
    appId: "1:746760557071:web:6134f43af4a46b2bcc497a"
};
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const storage  = getStorage(app);
export const db  = getFirestore(app);

export default app;
