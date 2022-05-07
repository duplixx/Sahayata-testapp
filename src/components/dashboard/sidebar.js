import React from 'react'
import {useState,useEffect} from 'react';
import {BsFilePost} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {RiUserSmileFill} from 'react-icons/ri'
import {BiUserCircle} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {CgNotifications} from 'react-icons/cg'
export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Home", src: <AiFillHome/> },
        { title: "Inbox", src: <BsFillArrowLeftCircleFill/> },
        { title: "Posts", src: <BsFilePost/> },
        { title: "Notifications", src: <CgNotifications/> },

        { title: "Accounts", src: <BiUserCircle/>, gap: true },
    ];
        return (
        <div className="flex">
            <div
                className={` ${open ? "w-60" : "w-20 "
                    } bg-purple-400 h-screen p-5  pt-8 relative duration-300`}
            >
                <BsFillArrowLeftCircleFill
                    className={`absolute cursor-pointer pl-1 text-4xl -right-3 top-9 w-8 bg-purple-400
                      rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center ">
                    <RiUserSmileFill
                        className={`cursor-pointer  text-4xl duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    
                     
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Sahayata
                    </h1>
                </div>
                <ul className="pt-6 ">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-white"
                                } `}
                        >   
                            <div className='text-2xl'>
                                {Menu.src}
                            </div>
                            
                            <span className={`${!open && "hidden"} origin-left duration-200 `}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
        )
}
