import { async } from '@firebase/util';
import React from 'react'
import { useAuth } from '../../context/authContext'
import {useNavigate} from  "react-router-dom";
import Usercard from './usercard';

export default function Navbar() {
    const navigate = useNavigate();
    const{LogOut} = useAuth();
    const HandleLogOut= async()=>{
        try {
            await LogOut();
            navigate('/signup');

        }catch(err) {
            console.log(err.message);
        }
    };
    return (
        <div>
            
            <div className="navbar bg-gray-200 h-[40px]">
                <div className="flex-1">
                <h1 id="s1" className="text-3xl mx-5 tracking-wider text-white font-black">Sahayta</h1>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                              <img src="https://img.icons8.com/ios-glyphs/50/000000/sort-down.png"/>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> */}
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 -mr-5 card card-compact dropdown-content h-42 bg-base-100 shadow">
                            <div className="btn btn-primary btn-action">
                             <button className="btn btn-primary" onClick={HandleLogOut}>Log Out</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <div  className="mt-3 mr-4 card card-compact dropdown-content h-42 bg-base-100 shadow">
                            <Usercard/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
