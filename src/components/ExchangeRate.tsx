import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../public/exchange_bg.png";

import axios from "axios";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import { useTranslation } from "react-i18next";

interface Coin {
  id: string;
  name: string;
  image: string;
  current_price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
}

export default function ExchangeRate() {
  const [data, setData] = useState<Coin[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <div className="w-full bg-[#041628] text-whitem mt-4">
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false, // Ensure autoplay doesn't stop on interaction
            pauseOnMouseEnter: false, // Ensure autoplay doesn't pause on mouse enter
          }}
          speed={3000} // Adjust speed to your liking
          loop={true}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {data.map((coin) => (
            <SwiperSlide key={coin.id}>
              <div className="pt-2 rounded-md flex items-center justify-center gap-3 text-center text-white">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-10 h-10 mb-2"
                />
                <h3 className="text-lg font-semibold">
                  {coin.name.length > 10 ? coin.name.slice(0, 10) : coin.name}
                </h3>
                <p className="text-sm">${coin.current_price.toFixed(2)}</p>
                <p
                  className={`text-sm ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.price_change_24h.toFixed(2)} (
                  {coin.price_change_percentage_24h.toFixed(2)}%)
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-[url('../../public/exchange_bg.png')] py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-6 md:px-12 2xl:px-[140px] text-center gap-6 text-white items-center">
        <div className="col-span-1">
          <h1 className="text-4xl lg:text-4xl font-medium">$ 2 000 000</h1>
          <p className="pt-1">{t("exChangeRate.title1")}</p>
        </div>
        <Separator orientation="vertical" className="mx-auto hidden lg:block" />
        <div>
          <h1 className="text-4xl lg:text-4xl font-medium">Up to 97%</h1>
          <p className="pt-1">{t("exChangeRate.title2")}</p>
        </div>
        <Separator orientation="vertical" className="mx-auto hidden lg:block" />
        <div className="col-span-1">
          <h1 className="text-4xl lg:text-4xl font-medium">100 +</h1>
          <p className="pt-1">{t("exChangeRate.title3")}</p>
        </div>
      </div>
    </div>
  );
}
