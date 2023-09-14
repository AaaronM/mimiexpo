import Image from "next/image";
import React from "react";

///////IMG
import logoBigRed from "../IMG/final/logoBigRed.png";
import heroGuy from "../IMG/final/heroGuy.png";

export default function Hero() {
  return (
    <section className="" id="home">
      <div className=" flex justify-center items-center h-screen overflow-hidden relative p-10">
        <div>
          <Image
            src={logoBigRed}
            className=" h-[800px] w-[800px] object-cover  "
          />
        </div>
        {/* <div>
          <Image
            src={heroGuy}
            className="  w-[800px] bg-pred rounded-full object-cover  "
          />
        </div> */}
      </div>
    </section>
  );
}
