import Image from "next/image";
import React from "react";

///////IMG
import logoBigRed from "../IMG/final/logoBigRed.png";
import heroGuy from "../IMG/final/heroGuy.png";

export default function Hero() {
  return (
    <section className="" id="home">
      <div className=" h-screen flex justify-center items-center  overflow-hidden relative mb-[100px] md:p-10">
        <div>
          <Image
            src={logoBigRed}
            className=" h-[800px] w-[800px] object-cover  "
            alt="logoBigRed"
          />
        </div>
        <div>
          <Image
            src={heroGuy}
            className=" hidden  md:w-[800px] md:bg-pred md:rounded-full md:object-cover  "
            alt="heroGuy"
          />
        </div>
      </div>
    </section>
  );
}
