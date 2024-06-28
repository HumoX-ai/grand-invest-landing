import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

interface Currency {
  value: string;
  label: string;
  rate: number;
  dif: number;
}

interface CurrencyConverterProps {
  currencyData: Currency[];
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  currencyData,
}) => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("UZS");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [convertedAmount, setConvertedAmount] = useState<string>("0");

  const { t } = useTranslation();

  const handleConvert = () => {
    const fromRate =
      fromCurrency === "UZS"
        ? 1
        : currencyData.find((c) => c.value === fromCurrency)?.rate || 1;
    const toRate = currencyData.find((c) => c.value === toCurrency)?.rate || 1;
    const converted = (amount * fromRate) / toRate;
    setConvertedAmount(converted.toFixed(2));
  };

  return (
    <Card className="mx-auto bg-[#f0f0f0] text-[#071828]">
      <CardHeader className="text-center">
        <img src="/exchange-rate.svg" alt="exchange" className="mx-auto" />
        <CardTitle className="pt-6">{t("exchangeRate.convert")}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-full mb-4 border border-[#4A5661] rounded-lg flex items-center px-2">
          <div>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="mr-12 border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent w-full"
            />
          </div>
          <hr className="w-px h-6 bg-[#4A5661]" />
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger className="w-full bg-transparent focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="UZS">Uzbekistan Som</SelectItem>
              {currencyData
                .sort((a, b) => a.label.localeCompare(b.label))
                .map((currency) => (
                  <SelectItem key={currency.value} value={currency.value}>
                    {currency.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div className="my-2 text-xl">⇅</div>
        <div className="relative w-full mb-4 border border-[#4A5661] rounded-lg flex items-center px-2">
          <div>
            <Input
              type="number"
              value={convertedAmount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="mr-12 border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
            />
          </div>
          <hr className="w-px h-6 bg-[#4A5661]" />
          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger className="w-full bg-transparent focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="UZS">Uzbekistan Som</SelectItem>
              {currencyData
                .sort((a, b) => a.label.localeCompare(b.label))
                .map((currency) => (
                  <SelectItem key={currency.value} value={currency.value}>
                    {currency.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <CustomButton
          className="w-full"
          title={t("exchangeRate.convertButton")}
          href="#"
          onClick={handleConvert}
        />
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
