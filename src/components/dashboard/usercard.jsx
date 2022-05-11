import React from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import {AiOutlinePlusCircle} from 'react-icons/ai';
import './background.jpg'

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
            src="https://i.ibb.co/xCQXVLf/background.jpg"
            alt="Shoes"
            className="w-full fixed -z-1"
          />
          <div className="z-99 rounded-full">
            {" "}
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14Gh1sLz6krN68NK_Fw-y9rq563HnqPcZBF-Y_62JpUM=s360-p-rw-no"
              alt="Shoes"
              className=" relative z-99 -bottom-[80px] rounded-full w-[90px] h-[90px]"
            />
          </div>
        </figure>

        <div className="card-body items-center text-center mt-20 font-bold text-2xl text-shadow shadow-lg">
          <h2 className="card-title">Shekhar Patel</h2>
          <h2 className=''>Nss And Ncc Member</h2>
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
