import CustomButton from "./CustomButton";
import Signals from "./Signals";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-gradient-to-r from-[#ea9c14] to-[#ffd765] sticky -top-20">
        <div className="relative w-full h-full bg-[url('/bg-products.svg')] dark:bg-[url('/bg-products-dark.svg')] bg-no-repeat lg:bg-cover bg-right  dark:bg-[#041628]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-24 w-full px-6 md:px-12 2xl:px-[140px]">
            <div className="flex flex-col gap-6 md:gap-10 md:order-last text-center md:text-start items-center md:items-start">
              <span className="px-4 py-1 bg-gradient-to-l from-[rgb(44,53,62)] to-[#344954] w-fit rounded-md">
                <p className="text-[#EA9C14]">{t("products.span")}</p>
              </span>
              <h1 className="text-4xl font-semibold lg:text-5xl bg-gradient-to-r from-[#344954] dark:from-[#ea9c14] dark:to-[#ffd765] to-[#2c353e] bg-clip-text text-transparent pb-1">
                {t("products.title")}
              </h1>
              <p className="text-sm w-full md:max-w-[500px] text-[#1f2c39] dark:text-[#f0f0f0]">
                {t("products.subtitle")}
              </p>
              <CustomButton dark href="/signup" title={t("products.button")} />
            </div>
            <div className="justify-self-center md:justify-self-end order-first md:order-last">
              <img src="/products_1.svg" alt="" />
            </div>
          </div>
          <div className="flex gap-2 w-full items-center justify-center pb-6">
            <span className="w-3 h-3 bg-[#1f2c39] dark:bg-[#ea9c14] rounded-full inline-block"></span>
            <span className="w-8 h-3 bg-[#1f2c39] dark:bg-[#ea9c14] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#1f2c39] dark:bg-[#ea9c14] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#1f2c39] dark:bg-[#ea9c14] rounded-full inline-block"></span>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#ea9c14] to-[#ffd765] sticky -top-20">
        <div className="relative w-full h-full bg-[url('/bg-products.svg')] dark:bg-[url('/bg-products-dark.svg')] bg-no-repeat lg:bg-cover bg-right dark:bg-[#041628]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-24 w-full px-6 md:px-12 2xl:px-[140px]">
            <div className="flex flex-col gap-6 md:gap-10 md:order-last text-center md:text-start items-center md:items-start">
              <span className="px-4 py-1 bg-gradient-to-l from-[rgb(44,53,62)] to-[#344954] w-fit rounded-md">
                <p className="text-[#EA9C14]">{t("products.span")}</p>
              </span>
              <h1 className="text-4xl font-semibold lg:text-5xl bg-gradient-to-r from-[#344954] dark:from-[#ea9c14] dark:to-[#ffd765] to-[#2c353e] bg-clip-text text-transparent pb-1">
                {t("products.title2")}
              </h1>
              <p className="text-sm w-full md:max-w-[500px] text-[#1f2c39] dark:text-[#f0f0f0]">
                {t("products.subtitle")}
              </p>
              <CustomButton dark href="/signup" title={t("products.button")} />
            </div>
            <div className="justify-self-center md:justify-self-end order-first md:order-last">
              <img src="/products_2.svg" alt="" />
            </div>
          </div>
          <div className="flex gap-2 w-full items-center justify-center pb-6">
            <span className="w-3 h-3 bg-[#1f2c39] dark:bg-[#ea9c14] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#1f2c39] dark:bg-[#ea9c14] rounded-full inline-block"></span>
            <span className="w-8 h-3 bg-[#1f2c39] dark:bg-[#ea9c14] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#1f2c39] dark:bg-[#ea9c14] rounded-full inline-block"></span>
          </div>
        </div>
      </div>
      <div className="sticky -top-28">
        <Signals />
      </div>
    </div>
  );
};

export default Products;
