"use client";

import React, { useState } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import USAflag from "../IMG/final/flagUSA.png";
import AMflag from "../IMG/final/flagAM.svg.png";
import Image from "next/image";

const options = [
  {
    label: "Option1",
    value: "option1",
    price: "$100",
  },
  {
    label: "Option1",
    value: "option2",
    price: "$200",
  },
  {
    label: "ption1",
    value: "option3",
    price: "$300",
  },
];

export default function AmToUs() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center gap-20  border-4 border-pdark p-10 rounded-3xl 
      
      "
      >
        <div className="  flex flex-row  justify-center items-center gap-10">
          <Image
            src={AMflag}
            className=" w-[80px] h-[80px] object-cover rounded-full "
          ></Image>
          <AiOutlineArrowRight className=" text-[35px] text-pdark" />
          <Image
            src={USAflag}
            className=" w-[80px] h-[80px] object-cover rounded-full "
          ></Image>
        </div>
        {/* <h3 className=" text-[42px] text-pred">Գնացուցակ</h3> */}
        <select
          value={selectedValue}
          onChange={handleValueChange}
          className=" w-[200px]  h-[60px] bg-pred rounded-3xl text-center text-[30px] text-light"
        >
          <option value="option1">1 կգ</option>
          <option value="option2">2 կգ</option>
          <option value="option3">3 կգ</option>
        </select>

        {selectedValue === "option1" && (
          <div className=" text-pred text-[42px]">֏1000</div>
        )}
        {selectedValue === "option2" && (
          <div className=" text-pred text-[42px]">֏2000</div>
        )}
        {selectedValue === "option3" && (
          <div className=" text-pred text-[42px]">֏3000</div>
        )}
      </div>
    </div>
  );
}
