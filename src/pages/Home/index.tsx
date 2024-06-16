import Hero from "@/components/Hero";
import ExchangeRate from "@/components/ExchangeRate";
import AboutUs from "@/components/AboutUs";

const Home = () => {
  return (
    <div>
      <div className="px-6 md:px-12 2xl:px-[140px]">
        <Hero />
      </div>
      <ExchangeRate />
      <div className="px-6 md:px-12 2xl:px-[140px]">
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
