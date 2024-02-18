import React from "react";
import Working from "../assets/project/work.png";
import Working2 from "../assets/project/drum.jpg";
import Working3 from "../assets/project/eduApps.png";


const Work = () => {
  return (
    <div id="work" name="work" className="w-full md:h-screen text-gray-300 bg-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Items */}
          <div
            style={{ backgroundImage: `url(${Working})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Fazzion UI WEB Design
              </span>
              <div className="pt-8 text-center">
                <a href="https://dribbble.com/Kris_12">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Show
                  </button>
                </a>
                
              </div>
            </div>            
          </div>

          <div
            style={{ backgroundImage: `url(${Working2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://krisadw.github.io/kris_drumkit/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/KrisAdw/kris_drumkit">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>            
          </div>
          <div
            style={{ backgroundImage: `url(${Working3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Edu Apps UI Design
              </span>
              <div className="pt-8 text-center">
                <a href="https://dribbble.com/Kris_12">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Show
                  </button>
                </a>                
              </div>
            </div>            
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Work;
