import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeliveryPrices from "./components/DeliveryPrices";
import Footer from "./components/Footer";
import PriceList from "./components/PriceList";
export default function Home() {
  return (
    <main className=" bg-light">
      <Navbar />
      <Hero />
      {/* <PriceList /> */}
      <DeliveryPrices />
      <PriceList />
      <Footer />
      {/* <About /> */}
      {/* <Calculator /> */}

      {/* <Contacts /> */}
    </main>
  );
}
