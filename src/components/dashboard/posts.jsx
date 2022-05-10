import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Post() {
  return (
    <div className="fixed bottom-0 right-0 mr-5 mb-4">
      <label class="btn btn-circle modal-button" htmlFor="my-modal-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full text-purple-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
        </svg>

    </label>
      {/* Put this part before </body> tag */ }
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative " htmlFor='my-modal-4'>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form>
    <div className="form-group mb-6 flex basis-">
      <input type="file"  accept="image/png, image/gif, image/jpeg" className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Name"/>
      <input
        type="text"
        className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleInput7"
        placeholder="Name"
      />
    </div>

    <div className="form-group mb-6">
      <textarea
        className="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
        id="exampleFormControlTextarea13"
        rows={3}
        placeholder="Description"
        defaultValue={""}
      />
    </div>
    <div className="form-group form-check text-center mb-6">
      <input
        type="checkbox"
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
        id="exampleCheck87"
        defaultChecked=""
      />
      <label
        className="form-check-label inline-block text-gray-800"
        htmlFor="exampleCheck87"
      >
        Send me a copy of this message
      </label>
    </div>
    <button
      type="submit"
      className="
px-6
py-2.5
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
    >
      Send
    </button>
    
  </form>
</div>
        </label>
      </label>
    </div >
  );
}
