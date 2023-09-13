"use client";
import Image from "next/image";
import React from "react";
import Logo from "../IMG/final/logoSmall.png";
//import icons

import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsChatSquareText,
} from "react-icons/bs";

//link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className=" relative z-[9999]">
      <Link
        smooth={true}
        className=" fixed top-0 cursor-pointer flex z-50  justify-center items-center p-10"
        to="home"
      >
        <Image src={Logo} className=" w-[80px] " />
      </Link>
      <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 ">
        {/* NAV INNER */}
        <div className="container mx-auto ">
          <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50 border-2 border-yellow  relative">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BiHomeAlt />
            </Link>

            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BiUser />
            </Link>

            <Link
              to="calculator"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsClipboardData />
            </Link>

            <Link
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsBriefcase />
            </Link>

            <Link
              to="contacts"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsChatSquareText />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
