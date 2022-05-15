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
      alert("Image Uploaded");
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
    <div className="fixed bottom-0 right-0 mr-5 mb-20">
      <label class="btn btn-circle modal-button" htmlFor="my-modal-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-error"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <div className="w-[400px] h-[400px]  bg-slate-400 flex-col align-center justify-self-center rounded-xl py-4 ">
          Your notification is in progress <i className="animate-spin">|</i>
          </div>
          
       </label>
    </div>
  );
}
