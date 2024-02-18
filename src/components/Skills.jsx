import React from "react";
import HTML from "../assets/html5.png";
import CSS from "../assets/css3.png";
import JS from "../assets/JS.png";
import Github from "../assets/GH.png";
import Figma from "../assets/figma.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import Rjs from "../assets/react.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-black text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-5 ">These are the technologies i've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#e34c26] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#264de4] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#F0DB4F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="HTML icon" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#06b6d4] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#a259ff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Figma} alt="HTML icon" />
            <p>Figma</p>
          </div>
          <div className="shadow-md shadow-[#3c873a] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p>Node</p>
          </div>
          <div className="shadow-md shadow-[#61DBFB] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Rjs} alt="HTML icon" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-[#2b3137] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="HTML icon" />
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
