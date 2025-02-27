import Hero from "@/components/Hero";
import ExchangeRate from "@/components/ExchangeRate";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
// import Signals from "@/components/Signals";
import Reviews from "@/components/Reviews";
import MobileApp from "@/components/MobileApp";
import ContactUs from "@/components/ContactUs";

const Home = () => {
  return (
    <div>
      <div className="px-6 md:px-12 2xl:px-[140px] max-w-[2000px] mx-auto">
        <Hero />
      </div>
      <ExchangeRate />
      <div className="px-6 md:px-12 2xl:px-[140px] max-w-[2000px] mx-auto">
        <AboutUs />
      </div>
      <Products />
      {/* <Signals /> */}
      <Reviews />
      <MobileApp />
      <ContactUs />
    </div>
  );
};

export default Home;
