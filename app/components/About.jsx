"use client";

import Image from "next/image";
import React from "react";
import packagee from "../IMG/final/package.png";

////FRAMER

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

export default function About() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="" id="about">
      <div className=" h-screen flex justify-center items-center p-5  bg-gray relative overflow-hidden mt-[-200px] ">
        <motion.div style={{ y }} className="z-50">
          <div className=" flex justify-center items-center gap-[100px] ">
            <div></div>
            <div className=" h-[200px] w-[200px] bg-pred rounded-full  hover:scale-110 transition-all flex justify-center items-center hover:shadow-2xl"></div>
            <div
              className=" h-[200px] w-[200px] bg-pred rounded-full hover:scale-110 transition-all
            flex justify-center items-center hover:shadow-2xl "
            ></div>
            <div
              className=" h-[200px] w-[200px] bg-pred rounded-full  hover:scale-110 transition-all
            flex justify-center items-center hover:shadow-2xl"
            ></div>
            <div
              className=" h-[200px] w-[200px] bg-pred rounded-full  hover:scale-110 transition-all
            flex justify-center items-center hover:shadow-2xl"
            ></div>
          </div>
        </motion.div>
        <h1 className=" absolute text-[320px] top-[5rem] text-dark/20 font-thin font-primary text-pred opacity-30 ">
          MIMI
        </h1>
        <h1 className=" absolute text-[120px] top-[28rem] text-dark/20 font-thin font-primary text-pdark opacity-20 ">
          EXPRESS
        </h1>
      </div>
    </section>
  );
}
