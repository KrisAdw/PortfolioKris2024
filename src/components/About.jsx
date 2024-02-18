import React from "react";
import profil from "../assets/profil.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 gap-8">
          <div className="sm:text-center pb-8 pl-3">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div className="sm:flex justify-center items-center my-3 pl-3">
            <img src={profil} className="w-[100px] rounded-full" alt="" />
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 my-6 pl-3">
          <div className="sm:text-right text-4xl font-bold pl-3">
            <img src="" alt="" />
            <p clas>
              Hi, I'm Kris, nice to meet you. Please take a look around
            </p>
          </div>
          <div className="sm:text-left pl-3">
            <p>
              I am a professional who is passionate about the field of frontend
              website development and UI/UX design. With a solid skill set in
              programming and design, I am able to create engaging and intuitive
              user experiences through responsive website interfaces. I enjoy
              combining creativity with technology to create stunning and
              functional products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
