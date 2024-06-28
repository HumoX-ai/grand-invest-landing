/* eslint-disable @typescript-eslint/no-explicit-any */
import CurrencyConverter from "@/components/Exchangerates/CurrencyConvertor";
import CurrencyTable from "@/components/Exchangerates/CurrencyTable";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Currency {
  value: string;
  label: string;
  rate: number;
  dif: number;
  flag?: string;
}

const ExchangeRates = () => {
  const [currencyData, setCurrencyData] = useState<Currency[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchCurrencyData = async () => {
      const response = await fetch(
        "https://cbu.uz/uz/arkhiv-kursov-valyut/json/"
      );
      const data = await response.json();
      const formattedData = data.map((currency: any) => ({
        value: currency.Ccy,
        label: currency.CcyNm_UZ,
        rate: parseFloat(currency.Rate),
        dif: parseFloat(currency.Diff),
      }));
      setCurrencyData(formattedData);
    };

    fetchCurrencyData();
  }, []);

  return (
    <div>
      <div className="bg-[#071828]">
        <div className="bg-[url('/bg-products-dark.svg')] bg-no-repeat lg:bg-cover">
          <div className="relative h-full bg-right z-10 py-24 w-full px-6 md:px-12 2xl:px-[140px] max-w-[2000px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center">
              <div>
                <h1 className="gradient-text-light font-semibold text-3xl lg:text-4xl">
                  {t("exchangeRate.title")}
                </h1>
                <p className="pt-4 text-white">{t("exchangeRate.subtitle")}</p>
              </div>
              <CurrencyConverter currencyData={currencyData} />
            </div>
          </div>
        </div>
      </div>
      <CurrencyTable currencyData={currencyData} />
    </div>
  );
};

export default ExchangeRates;
