"use client";

import React, { useState } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import USAflag from "../IMG/final/flagUSA.png";
import AMflag from "../IMG/final/flagAM.svg.png";
import Image from "next/image";

const calculatePrice = (kgs) => {
  let result = Math.ceil(kgs) * 8.8;

  return result.toFixed(1);
};

export default function UsToAm() {
  const [selectedValue, setSelectedValue] = useState("0");
  const maxValue = 1999;

  const handleValueChange = (event) => {
    let value = event.target.value;

    value = value.replace(/[^\d.]/g, '');

    value = value.replace(/^0+(?=\d)/, '');

    const decimalCount = (value.match(/\./g) || []).length;
    if (decimalCount > 1) {
      return;
    }

    if (/^-?\d+(\.\d{0,2})?$/.test(value) && parseFloat(value) <= maxValue) {
      setSelectedValue(value);
    } else {
      setSelectedValue("0");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-20  border-4 border-pdark p-10 rounded-3xl">
        <div className=" flex flex-row  justify-center items-center gap-10">
          <Image
            src={USAflag}
            className=" w-[80px] h-[80px] object-cover rounded-full"
            alt="USA Flag"
          ></Image>
          <AiOutlineArrowRight className=" text-[35px] text-pdark" />
          <Image
            src={AMflag}
            className=" w-[80px] h-[80px] object-cover rounded-full"
            alt="Arm Flag"
          ></Image>
        </div>
        {/* <h3 className=" text-[42px] text-pred">Գնացուցակ</h3> */}
        <div className="flex flex-row items-center gap-5">
          <input
            className="w-[200px] h-[60px] bg-pred rounded-3xl text-center text-[30px] text-light"
            type="number"
            max="100"
            value={selectedValue}
            onChange={handleValueChange}
          ></input>
          <p className="text-xl">կգ</p>
        </div>

        <div className="text-pred text-[42px]">
          ${calculatePrice(selectedValue)}
        </div>
      </div>
    </div>
  );
}
