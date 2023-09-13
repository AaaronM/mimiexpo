"use client";
import React, { useState } from "react";

const options = [
  {
    label: "Option1",
    value: "option1",
  },
  {
    label: "Option1",
    value: "option2",
  },
  {
    label: "ption1",
    value: "option3",
  },
];

export default function Calculator() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <section>
      <div
        className="flex flex-row justify-center items-center gap-20 h-[400px] bg-pdark"
        id="calculator"
      >
        <h3 className=" text-[42px] text-pred">Գնացուցակ</h3>
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
          <div className=" text-pred text-[42px]">֏12000</div>
        )}
        {selectedValue === "option3" && (
          <div className=" text-pred text-[42px]">֏3000</div>
        )}
      </div>
    </section>

    // <section className="" id="calculator">
    //   <div className=" flex flex-row justify-center items-center gap-20 h-screen">
    //     <select>
    //       <option value="option1">Option 1</option>
    //       <option value="option2">Option 2</option>
    //       <option value="option3">Option 3</option>
    //     </select>

    //     {/* <div className=" w-[200px] h-[200px] bg-pred flex justify-center items-center  rounded-3xl">
    //       <p>KG</p>
    //     </div>

    //     <div className=" w-[200px] h-[200px] bg-tred flex justify-center items-center  rounded-3xl">
    //       <p>Price</p>
    //     </div> */}
    //   </div>
    // </section>
  );
}
