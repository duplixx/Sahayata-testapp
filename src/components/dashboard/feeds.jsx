import React from "react";
import "./feeds.css";

export default function Feeds() {
  //     {
  //       title: "jo bhi ho",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, iure.",
  //       src: 'https://images.unsplash.com/photo-1475776408506-9a5371e7a068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80',
  //       timeUpdated: 2400,
  //     },
  //     {
  //         title: 'jo bhi ho',
  //         description: 4000,
  //         src: 2400,
  //         timeUpdated: 2400,
  //       },

  //   ];
  const card = [
    {
      title: "6.8 -magnitude earthquake hits Noida",
      description:
        "This morning a high intensity  earthquake of magnitude 6.8 hits noida",
      src: "https://api.lorem.space/image/face?hash=33791",
    },
    {
      title: "NDRF team send relief goods to flood victim",
      description:
        " NDRF volunteers were seen in food distribution work to help the victims",
      src: "https://api.lorem.space/image/face?hash=33791",
    },
    {
      title: "Cyclone Asani: NDRF teams on standby in coastal Andhra",
      description:
        " Teams of the National Disaster Response Force (NDRF) and State Disaster Response Force (SDRF) were on standby for rescue and relief operations in coastal Andhra Pradesh.",
      src: "https://api.lorem.space/image/face?hash=33791",
    },
    {
      title: "NDRF conducts various workshop ",
      description:
        "NDRF was seen in active participation in conduction on various workshops",
      src: "https://api.lorem.space/image/face?hash=33791",
    },
    {
      name: "NCC volunteers save life of several victims",
      description:
        " NCC volunteer with help of NDRF team saves life of  more than 500 victims",
      src: "https://api.lorem.space/image/face?hash=33791",
    },
  ];

  return (
    <div className=''>
      <div class="">
        <div id="card" class="">
          <div class="container w-80 lg:w-4/5 mx-auto flex flex-col rounded-2xl">
            <div className=" bg-green-400 absolute top-0 mt-1 border-4 w-2 h-2 avatar rounded-md flex m-5 p-2"></div>
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-bold leading-tight truncate text-2xl ">
                  {card[0].title}
                </h3>
                <p class="mt-2">{card[0].description}</p>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  {card.author} &bull; {card[0].date}
                </p>
              </div>
              <div class="h-44 w-auto md:w-1/2 mb-2">
                <img
                  class=" h-full w-full object-cover object-center rounded-lg"
                  src={card[0].src}
                />
              </div>
            </div>
            <div className="flex justify-end w-full rounded-xl px-3 ">
              <div className=" flex justify-between shadow-lg bg-white  w-[200px] rounded-md m-2 p-1 px-2">
                <i className="fa fa-heart   text-3xl  "></i>
                <i className="fa fa-share   text-3xl "></i>
                <i
                  className="fa fa-commenting-o text-3xl"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div id="card" class="rounded-lg">
          <div class="container w-80 lg:w-4/5 mx-auto flex flex-col">
            <div className=" bg-green-400 absolute top-0 mt-1 border-4 w-2 h-2 avatar rounded-md flex m-5 p-2"></div>
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-bold leading-tight truncate text-2xl ">
                  {card[0].title}
                </h3>
                <p class="mt-2">{card[0].description}</p>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  {card.author} &bull; {card[0].date}
                </p>
              </div>
              <div class="h-44 w-auto md:w-1/2 mb-2">
                <img
                  class=" h-full w-full object-cover object-center rounded-lg"
                  src={card[0].src}
                />
              </div>
            </div>
            <div className="flex justify-end w-full ">
              <div className=" flex justify-between shadow-lg bg-white  w-[200px] rounded-md m-2 p-1 px-2">
                <i className="fa fa-heart   text-3xl  "></i>
                <i className="fa fa-share   text-3xl "></i>
                <i
                  className="fa fa-commenting-o text-3xl"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div id="card" class="rounded-lg">
          <div class="container w-80 lg:w-4/5 mx-auto rounded-xl flex flex-col">
            <div className=" bg-green-400 absolute top-0 mt-1 border-4 w-2 h-2 avatar rounded-md flex m-5 p-2"></div>
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-bold leading-tight truncate text-2xl ">
                  {card[0].title}
                </h3>
                <p class="mt-2">{card[0].description}</p>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  {card.author} &bull; {card[0].date}
                </p>
              </div>
              <div class="h-44 w-auto md:w-1/2 mb-2">
                <img
                  class=" h-full w-full object-cover object-center rounded-lg"
                  src={card[0].src}
                />
              </div>
            </div>
            <div className="flex justify-end w-full ">
              <div className=" flex justify-between shadow-lg bg-white  w-[200px] rounded-md m-2 p-1 px-2">
                <i className="fa fa-heart   text-3xl  "></i>
                <i className="fa fa-share   text-3xl "></i>
                <i
                  className="fa fa-commenting-o text-3xl"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
