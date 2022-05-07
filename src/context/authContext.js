import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  function LogIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function SignUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function LogOut() {
    return signOut(auth);
  }
  function GoogleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, LogIn, SignUp, LogOut, GoogleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(userAuthContext);
}
