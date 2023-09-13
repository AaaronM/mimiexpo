import React from "react";
import shipdays from "../IMG/final/bro.png";
import Image from "next/image";

//img
import small from "../IMG/final/small.png";
import big from "../IMG/final/big.png";
import medium from "../IMG/final/medium.png";

export default function Sevendship() {
  return (
    <div>
      <div className=" relative">
        <Image src={shipdays} className=" p-10  opacity-20 absolute" />
      </div>
    </div>
  );
}
