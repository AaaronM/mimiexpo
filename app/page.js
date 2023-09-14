import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeliveryPrices from "./components/DeliveryPrices";
export default function Home() {
  return (
    <main className=" bg-light">
      <Navbar />
      <Hero />
      {/* <PriceList /> */}
      <DeliveryPrices />
      {/* <About /> */}
      {/* <Calculator /> */}

      {/* <Contacts /> */}
    </main>
  );
}
