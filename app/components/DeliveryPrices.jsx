import React from "react";
import AmToUs from "./AmToUs";
import UsToAm from "./UsToAm";

export default function DeliveryPrices() {
  return (
    <div>
      <div
        className=" h-screen flex flex-row justify-center items-center gap-20 mt-[-200px]"
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
