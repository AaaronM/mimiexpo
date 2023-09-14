import Image from "next/image";
import React from "react";

//img
import small from "../IMG/final/small.png";
import big from "../IMG/final/big.png";
import medium from "../IMG/final/medium.png";

export default function PriceList() {
  return (
    <div className=" items-center justify-center mt-10" id="work">
      <h2 className=" text-center text-[35px] mb-20 ">Գնացուցակ</h2>
      <div className="  flex flex-col md:flex-row  justify-center items-center gap-[100px]">
        <div className=" flex flex-col  justify-center items-center ">
          <Image
            className=" w-[140px] h-[140px] scale-95"
            src={small}
            alt="alt"
          ></Image>
          <p className=" text-[20px]">
            1-3 կգ, <br /> 1 կգ = <span className=" text-pred">֏6000</span>
          </p>
        </div>

        <div>
          <Image
            className=" w-[140px] h-[140px] "
            src={medium}
            alt="alt"
          ></Image>
          <p className=" text-[20px]">
            3.1կգ - 99կգ, <br /> 1 կգ ={" "}
            <span className=" text-pred">֏4800</span>
          </p>
        </div>
        <div>
          <Image
            className="w-[140px] h-[140px]  scale-125"
            src={big}
            alt="alt"
          ></Image>
          <p className=" text-[20px]">
            100կգ և ավելի <br /> 1 կգ ={" "}
            <span className=" text-pred">֏4200</span>
          </p>
        </div>
      </div>
    </div>
  );
}
