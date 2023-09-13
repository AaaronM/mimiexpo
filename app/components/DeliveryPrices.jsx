import React from "react";
import AmToUs from "./AmToUs";
import UsToAm from "./UsToAm";

export default function DeliveryPrices() {
  return (
    <div className="md:mx-0 mx-8">
      <div
        className="h-screen flex flex-col gap-10 md:flex-row md:justify-center md:items-center md:gap-20 mt-[-200px]"
        id="calculator"
      >
        <div className=" flex flex-col text-center">
          <h3>ARM - US</h3>
          <AmToUs />
        </div>

        <div className=" flex flex-col text-center">
          <h3>US - ARM</h3>
          <UsToAm />
        </div>
      </div>
    </div>
  );
}
