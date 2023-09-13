import Image from "next/image";
import React from "react";

//img
import small from "../IMG/final/small.png";
import big from "../IMG/final/big.png";
import medium from "../IMG/final/medium.png";

export default function PriceList() {
  return (
    <div>
      <h2 className=" text-center text-[35px] ">Prices</h2>
      <div className="  flex flex-row  justify-center items-center gap-[100px]">
        <div className=" flex flex-col justify-center items-center">
          <Image className=" w-[140px]" src={small}></Image>
          <p className=" pb-30">
            From 1-3 kg 6000dram <br />
            for each kg
          </p>
        </div>

        <div>
          <Image className=" w-[160px]" src={medium}></Image>
          <p className=" pb-30">
            From 1-3 kg 6000dram <br />
            for each kg
          </p>
        </div>
        <div>
          <Image className=" w-[230px] pt-[20px]" src={big}></Image>
          <p className=" pb-30">
            From 1-3 kg 6000dram <br />
            for each kg
          </p>
        </div>
      </div>
    </div>
  );
}
