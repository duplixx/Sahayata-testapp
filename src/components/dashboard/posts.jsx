import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
// import "./posts.css";
import { useState, useEffect } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function Post() {
  const data = { location: "lukhnow" };

  const [ImageUpload, setImageUpload] = useState(null);
  const [ImageList, setImageList] = useState([]);
  const ImageListRef = ref(storage, "images/");
  const UploadImage = () => {
    if (ImageUpload == null) return;
    const imageRef = ref(storage, "image/${imageUpload.name+v$()}");
    uploadBytes(imageRef, ImageUpload).then(() => {
      alert("Image Uploaded !!");
    });
  };
  useEffect(() => {
    listAll(ImageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="fixed bottom-0 right-0 mr-5 mb-4">
      <label class="btn btn-circle modal-button" htmlFor="my-modal-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-full w-full text-purple-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <div className="relative w-[400px] h-[400px]  bg-gray-400 flex-col align-center justify-self-center rounded-xl py-4 px-2 ">
          <div className="flex flex-col pt-4 ">
            <div class="form-control">
              <label class="input-group">
                <span class="">Text here</span>
                <input type="text" class="input input-bordered items-center" />
              </label>
            </div>
          </div>
          <div className=" bg-white  rounded-xl mt-8 ">
            <input
              type="file"
              placeholder="Insert Image"
              className="p-2"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button
              onClick={UploadImage}
              className="bg-primary p-4 px-8 absolute right-3 bottom-5 rounded-xl  hover:bg-error hover:text-white "
            >
              Submit
            </button>
          </div>
          <select class="select select-info w-1/2 max-w-xs mt-5">
            <option disabled selected>
              Select Location
            </option>
            <option>JAMMU AND KASHMIR</option>
            <option>HIMACHAL PRADESH</option>
            <option>PUNJAB</option>
            <option> CHANDIGARH</option>
            <option>UTTARAKHAND</option>
            <option>HARYANA</option>
            <option>DELHI</option>
            <option>RAJASTHAN</option>
            <option>UTTAR PRADESH</option>
            <option>BIHAR</option>
            <option>SIKKIM</option>
            <option>ARUNACHAL PRADESH</option>
            <option>NAGALAND</option>
            <option>MANIPUR</option>
            <option>MIZORAM</option>
            <option>TRIPURA</option>
            <option>MEGHALAYA</option>
            <option>ASSAM</option>
            <option>WEST BENGAL</option>
            <option>JHARKHAND</option>
            <option>ORISSA</option>
            <option>CHHATTISGARH</option>
            <option>MADHYA PRADESH</option>
            <option>GUJARAT</option>
            <option>DAMAN AND DIU</option>
            <option>DADAR AND NAGAR HAVELI</option>
            <option>MAHARASTRA</option>
            <option>KARNATAKA</option>
            <option>GOA</option>
            <option>TAMIL NADU</option>
            <option>LAKSHADWEEP</option>
            <option>KERALA</option>
            <option>PUDUCHERRY</option>
            <option>ANDAMAN AND NICOBAR</option>
            <option>TELANGANA</option>
            <option>ANDHRA PRADESH</option>
            <option>OTHER TERRITORY</option>
            <option>OTHER COUNTRY</option>
          </select>
        </div>
      </label>

      {/* <label htmlFor="my-modal-4" className="modal cursor-pointer">
      </label> */}
    </div>
  );
}
