import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Calculator from "./components/Calculator";
import Contacts from "./components/Contacts";
import DeliveryPrices from "./components/DeliveryPrices";
import PriceList from "./components/PriceList";
import Sevendship from "./components/sevendship";

export default function Home() {
  return (
    <main className=" bg-light">
      <Navbar />
      <Hero />
      {/* <PriceList /> */}
      <DeliveryPrices />
      <Sevendship />
      {/* <About /> */}
      {/* <Calculator /> */}

      {/* <Contacts /> */}
    </main>
  );
}
