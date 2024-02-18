import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kris Adiwinata
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a{" "}
          <span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Front-End Developer",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "UI/UX Designer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm passionate about frontend web development and UI/UX design. With
          skills in programming and design, I craft engaging user experiences
          through responsive interfaces, blending creativity with technology.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={-70} // Sesuaikan dengan kebutuhan Anda, untuk menyesuaikan margin atas
              duration={500}
              className="scroll-button"
            >
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
