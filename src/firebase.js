import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


//  const firebaseConfig = {
//     apiKey:         process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain:      process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId:       process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     storageBucket:   process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:process.env.REACT_APP_MESSAGE_SENDER_ID ,
//     appId:process.env.REACT_APP_APP_ID       
// }; 
// export const auth =app.auth()
// export default auth
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
export default app;
