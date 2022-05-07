import React from 'react'
import animationData from '../lottie/help.json'
import Lottie from 'react-lottie';
import './loading.css';
import Reveal from 'react-reveal/Reveal';

export default function loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  
  return (
    <div>
            <div className="flex flex-col w-full">
              <Lottie 
        	    options={defaultOptions}
                height={400}
                width={400}
              />
              <div className="text-center flex flex-col mt-10">
                <h1 id="s1" className="text-5xl m-5 tracking-wider text-gray-500 font-black">Sahayta</h1>
                <Reveal effect="fadeInUp"><p id="p1" className="text-bold m-5 tracking-widest" >Community for our Superheroes</p></Reveal>
              </div>
              
            </div>
    </div>
  )
}
