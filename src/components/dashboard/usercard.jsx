import React from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import {AiOutlinePlusCircle} from 'react-icons/ai'

export default function Usercard() {
  const navigate = useNavigate();
  const { LogOut } = useAuth();
  const HandleLogOut = async () => {
    try {
      await LogOut();
      navigate("/signup");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <div className="card w-[250px] h-[400px] bg-base-100 shadow-xl rounded-3xl flex-col">
        <figure className="px-10 pt-10">
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=250"
            alt="Shoes"
            className="w-full fixed -z-1"
          />
          <div className="z-99 rounded-full">
            {" "}
            <img
              src="https://api.lorem.space/image/face?w=80&h=80"
              alt="Shoes"
              className=" relative z-99 -bottom-[80px] rounded-full"
            />
          </div>
        </figure>

        <div className="card-body items-center text-center mt-20 font-bold text-2xl text-shadow shadow-lg">
          <h2 className="card-title">Gen Bakshi</h2>
          <h2 className=''>Former General in Chief</h2>
          <p>Battalion Id:</p><p> 126649</p>

          <div className="card-actions">
            <button className="btn btn-primary " onClick={HandleLogOut}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
