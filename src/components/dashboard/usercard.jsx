import React from "react";

export default function Usercard() {
  return (
    <div>
      <div className="card w-[250px] h-[400px] bg-base-100 shadow-xl rounded-3xl flex-col">
        <figure className="px-10 pt-10">
            <img src="https://api.lorem.space/image/shoes?w=400&h=250" alt="Shoes" className="w-full fixed -z-1" />
            <div className='z-99 rounded-full'> <img src="https://api.lorem.space/image/face?w=80&h=80" alt="Shoes" className=" relative z-99 -bottom-[80px] rounded-full" /></div>
        </figure>
        
        <div className="card-body items-center text-center mt-24   ">
          <h2 className="card-title">Gareeb</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <div className="card-actions">
            <button className="btn btn-primary">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
