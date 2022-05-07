import React from "react";
import { useState,useEffect } from 'react';
import Login from './components/login/login';
import { AuthProvider } from './context/authContext';
import Splash from './components/loading'
import {Routes,Route} from "react-router-dom";
import Dashboard from "./components/dashboard/dash"
import Signup from "./components/signup/signup"
import ProtectedRoute from "./components/protectedroute"
import Dash from "./components/dashboard/dash";
function App() {
  // const[Loading,setLoading]=useState(false); //this is for splash animation
  //   useEffect(()=>{
  //     setLoading(true)
  //     setTimeout( ()=>{
  //       setLoading(false)
  //     },500)
  //   },[])
  return (
    <>
      {/* <div className="bg-red-500">
        hello this 
      </div> */}
        {/* <Login/> */}
        <AuthProvider>
          <Routes>
            <Route path="/dash" element={<ProtectedRoute><Dash/></ProtectedRoute>} />
            <Route path="/" element={<Login/>} />
            <Route path="/SignUp" element={<Signup/>} />
          </Routes>
        </AuthProvider>
        

    </>
  );
}

export default App;
