import React from 'react'
import { useState, useEffect } from 'react';
import { BsFilePost } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { RiUserSmileFill } from 'react-icons/ri'
import { BiUserCircle } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { CgNotifications } from 'react-icons/cg'
import Info from '../../context/userinfo'
import animationData from '../../lottie/wombbb.json'
import Lottie from 'react-lottie';
import Postmodal from './postmodal'
import Postmodalsmall from './postmodalsmall';
export default function Sidebar() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        controls: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const [open, setOpen] = useState(false);
    const Menus = [
        { title: "Home", src: <AiFillHome /> },
        { title: "Inbox", src: <BsFillArrowLeftCircleFill /> },
        { title: "Notifications", src: <CgNotifications /> },
        { title: <Info />, src: <BiUserCircle />, gap: true, style: { bgColor: "#000000" } },
        {
            title: <Lottie
                options={defaultOptions}
                height={200}
                width={150}
            />,
        },


    ];
    return (
        <div className="flex">
            <div
                className={` ${open ? "w-60" : "w-20 "
                    } bg-gray-200 h-screen p-5  pt-8 relative duration-300`}
            >
                <BsFillArrowLeftCircleFill
                    className={`absolute cursor-pointer pl-1 text-4xl -right-3 top-9 w-8 bg-gray-200
                      rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <ul className="pt-1 ">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-sm items-center gap-x-4 active:bg-white border-b-2 border-white 
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

        </div >
    )
}
