import React from "react";
import {AiOutlinePlusCircle} from 'react-icons/ai'

export default function Post() {
  return (
    <div className="fixed bottom-0 right-0 mr-5 mb-4">
      <label htmlFor="my-modal-4" className=" flex modal-button px-2 text-6xl bg-blue-400 rounded-full  m-0  focus:animate-ping shadow-xl ">
            <h1 className="text-3xl inline-block mt-3 mr-2 font-bold">Post</h1>
            <AiOutlinePlusCircle/>
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor>
          <h3 className="text-lg font-bold">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </div>
  );
}
