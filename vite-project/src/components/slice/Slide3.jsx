import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/data/MyContext";

function Slide3() {
  const context = useContext(MyContext);
    const { mode} = context;
  return (
    <>
      {/* <div className="min-h-screen bg-gray-100 flex flex-col justify-center"> */}
      <div className="relative m-3 flex flex-wrap mx-auto justify-center">
        <Link to={"/allproducts"}>
        <div style={{border : "2px solid white",backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }} className="relative max-w-sm min-w-[340px] bg-gray-100 shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div className="overflow-x-hidden rounded-2xl relative">
            <img
            style={{padding : "30px", height : "19rem"}}
              className="h-40 rounded-2xl w-full object-cover"
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/chips/r/n/w/115-turtle-chips-mexican-lime-corn-1-orion-original-imagmzh6gyhvpga3.jpeg?q=70"
            />
            <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:opacity-50 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </p>
          </div>
          <div style={{borderRadius : "10px",border : "2px solid white"}} className="mt-4 pl-2 mb-2 flex justify-between ">
            <div>
              <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-lg font-semibold text-gray-900 mb-0">
                Turtle Potato chips
              </p>
              <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-md text-gray-800 mt-0">₹15</p>
            </div>
           
          </div>
        </div>
        </Link>

        <Link to={"/allproducts"}>
        <div  style={{border : "2px solid white",backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }} className="relative max-w-sm min-w-[340px] bg-gray-100 shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div className="overflow-x-hidden rounded-2xl relative">
            <img
            style={{padding : "30px", height : "19rem"}}
              className="h-40 rounded-2xl w-full object-cover"
              src="https://m.media-amazon.com/images/I/61TlishHeGL._SX679_.jpg"
            />
            <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:opacity-50 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </p>
          </div>
          <div style={{borderRadius : "10px",border : "2px solid white"}} className="mt-4 pl-2 mb-2 flex justify-between ">
            <div >
              <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-lg font-semibold text-gray-900 mb-0">
               MTR Upma
              </p>
              <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-md text-gray-800 mt-0">₹50</p>
            </div>
         
          </div>
        </div>
        </Link>





        <Link to={"/allproducts"}>
        <div style={{border : "2px solid white",backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }} className="relative max-w-sm min-w-[340px] bg-gray-100 shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div className="overflow-x-hidden rounded-2xl relative">
            <img style={{padding : "30px", height : "19rem"}}
              className="h-40 rounded-2xl w-full object-cover"
              src="https://rukminim2.flixcart.com/image/416/416/krgohow0/chips/h/6/b/cream-and-onion-potato-bingo-original-imag58qygxvanmc2.jpeg?q=70"
            />
            <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:opacity-50 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </p>
          </div>
          <div style={{borderRadius : "10px",border : "2px solid white"}} className="mt-4 pl-2 mb-2 flex justify-between ">
            <div>
              <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-lg font-semibold text-gray-900 mb-0">
              Bingo Potato Chips 
              </p>
              <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-md text-gray-800 mt-0">₹15</p>
            </div>
        
          </div>
        </div>
        </Link>
      </div>
      {/* </div> */}
    </>
  );
}

export default Slide3;
