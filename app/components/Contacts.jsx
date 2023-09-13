import Image from "next/image";
import React from "react";

////IMG
import small from "../IMG/final/s.png";
import medium from "../IMG/final/m.png";
import large from "../IMG/final/l.png";

export default function Contacts() {
  return (
    <section className=" " id="contacts">
      <div>Hi</div>
      {/* <div className=" flex flex-col  justify-center items-center relative h-screen">
        <div className=" h-2/3 w-full flex justify-evenly mt-[80px]">
          <div>
            <Image src={small} className=" w-[200px] h-[200px]" />
            <p> 1-3 kg 6000 darm for every kg </p>
          </div>
          <div>
            <Image src={medium} className=" w-[200px] h-[200px]" />
            <p> 3kg more 4800 darm for every kg </p>
          </div>

          <Image src={large} className=" w-[200px] h-[200px]" />
        </div>
        <div className=" h-1/3 w-full bg-pdark">Bottom</div>
      </div> */}
    </section>
  );
}
