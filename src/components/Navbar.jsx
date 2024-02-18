import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
      <div>
        <img className="logo" src={logo} style={{ width: "50px" }} alt="" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li id="menu-web">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li id="menu-web">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li id="menu-web">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li id="menu-web">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li id="menu-web">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li id="menu-web" className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li id="menu-web" className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li id="menu-web" className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li id="menu-web" className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li id="menu-web" className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#0077B5]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/kris-adiwinata-726379214/"
            >
              LinkedIn{" "}
              <FaLinkedin className="mr-[-10px] lg:mr-0 duration-0" size={30} />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#24292e]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/KrisAdw"
            >
              GitHub{" "}
              <FaGithub className="mr-[-10px] lg:mr-0 duration-0" size={30} />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:krisadiwinata12@gmail.com"
            >
              Email{" "}
              <HiOutlineMail
                className="mr-[-10px] lg:mr-0 duration-0"
                size={30}
              />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#cd405d]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.usercontent.google.com/download?id=1ji6ZsK7Xaf8ixwsZysVEHQEd0PbHi2ze&export=download&authuser=0&confirm=t&uuid=7f8ea9a4-1455-40f7-9eb4-c5ce02b63dbd&at=APZUnTUHWjHxrxeTFYcSp--0P7Pl:1708244413349"
            >
              Resume{" "}
              <BsFillPersonLinesFill
                className="mr-[-10px] lg:mr-0 duration-0"
                size={30}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
