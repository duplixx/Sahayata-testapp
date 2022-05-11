import { async } from '@firebase/util';
import React from 'react'
import { useAuth } from '../../context/authContext'
import { useNavigate } from "react-router-dom";
import Usercard from './usercard';
import {AiOutlineAlert} from 'react-icons/ai'


export default function Navbar() {

    return (
        <div>

            <div className="navbar  bg-gradient-to-r from-indigo-600 to-indigo-400 h-[40px]">
                <div className="flex-1">
                    <h1 id="s1" className="text-3xl mx-5 tracking-wider text-white font-black">Sahayata</h1>
                </div>
                <div className="flex-none space-x-2 ">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <img src="https://img.icons8.com/external-neu-royyan-wijaya/45/000000/external-alert-neu-interface-neu-royyan-wijaya-2.png" className="p-2" />
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> */}
                            </div>
                        </label>
                        <ul tabindex="0" class="dropdown-content menu  shadow bg-base-100 mt-2 rounded-box w-52 font-semibold">
                            <li><a><AiOutlineAlert className=' text-red-400 rounded-full'/>Incident Near Kanpur</a></li>
                            <li><a><AiOutlineAlert className=' text-green-400 rounded-full'/>Bubneswar gas tragedy</a></li>
                            <li><a><AiOutlineAlert className=' text-green-400 rounded-full'/>Bubneswar gas tragedy</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                            <div className="w-10 rounded-full">
                                <img src="https://lh3.googleusercontent.com/a-/AOh14Gh1sLz6krN68NK_Fw-y9rq563HnqPcZBF-Y_62JpUM=s360-p-rw-no" />
                            </div>
                        </label>
                        <div className="mt-3 mr-4 card card-compact dropdown-content h-42 bg-base-100 shadow">
                            <Usercard />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
