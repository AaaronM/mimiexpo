import React from "react";

import { CiLocationOn, CiInstagram, CiMail } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";

export default function Footer() {
  return (
    <div id=" contacts ">
      <div className=" bg-pdark h-[220px] text-light flex flex-row justify-between md:items-center items-start p-10 mt-10">
        <div className=" flex flex-row justify-between items-center">
          <CiLocationOn className=" text-[35px]" />
          <p>Երևան Մ. Հերացի 16</p>
        </div>
        <div>
          <div className=" flex flex-row justify-between items-center">
            <PiPhoneCallThin className=" text-[35px]" />
            <p>+374 44 70 1010</p>
          </div>

          <div className=" flex flex-row justify-between items-center">
            <CiInstagram className=" text-[35px]" />
            <p>@mimi__express</p>
          </div>
        </div>
      </div>
    </div>
  );
}
