import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../lottie/turtle.json'
// import '../loading.css';
// import CardLogin from './CardLogin';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useRef, useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import Dash from './../dashboard/dash'






export default function Login() {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [error, setError] = useState();
  const { LogIn, GoogleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await LogIn(email, Password);
      navigate("/dash");
    } catch (err) {
      setError("Failed to Login");
    }
  };
  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    try {
      await GoogleSignIn();
      navigate("/dash");
    } catch (err) {
      setError(err.message);
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }

  };


  return (
    <div>
      <Lottie className='absolute -z-1'
        options={defaultOptions}
        height={"100vh"}
        width={"100vw"}
        style={{
          position: `absolute`,
        }}
      />
      <nav className="relative w-full flex flex-wrap  py-3 bg-none text-gray-500 ">

        <div className=" flex flex-wrap  justify-between align-center w-full">

          <div>
            <h1 id="s1" className="text-5xl m-5 tracking-wider text-white font-black">Sahayta</h1>

          </div>
          <div className="flex space-x-5 px-5">
            <h1 id="menu">Home </h1>
            <h1 id="menu">Sign Up </h1>
          </div>
        </div>
      </nav>

      {/* <CardLogin/> */}
      <div className="flex flex-end w-full">
        <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-gradient-to-t from-white to-none rounded-lg backdrop-blur-sm linear border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-black text-5xl font-bold" id="p1">
                  Log in
                </h6>
              </div>
              <div className="text-center mb-3">
                {/* <button
                  className="text-black text-5xl font-bold"
                  onclick={5 + 5}
                >
                  Sign in
                </button> */}
              </div>

              <hr className="mt-6 border-b-1 border-blue -300" />
            </div>
            {error && <span className="border-2 text-white border-red-300 bg-red-400 text-wrap  text-center">{error}</span>}
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-blue-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button" onClick={handleSubmit}
                  >
                    {" "}
                    Log In{" "}
                  </button>
                  <span>
                    Are you new to family ?
                     
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        <footer className='text-white'>
          <div>
            <ul>
              <li>
                HELP ?
              </li>
              <li>
                FAQ
              </li>
            </ul>
          </div>
        </footer>




      </div>
      </div>
      )
}
