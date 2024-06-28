import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslation } from "react-i18next";

interface Currency {
  value: string;
  label: string;
  rate: number;
  dif: number;
}

interface CurrencyTableProps {
  currencyData: Currency[];
}

const CurrencyTable: React.FC<CurrencyTableProps> = ({ currencyData }) => {
  const [visibleRows, setVisibleRows] = useState<number>(10);
  const { t } = useTranslation();

  const loadMore = () => {
    setVisibleRows((prevVisibleRows) => {
      const newVisibleRows = prevVisibleRows + 10;
      return Math.min(newVisibleRows, currencyData.length);
    });
  };

  return (
    <Card className="w-full mx-auto shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {t("exchangeRate.currencyRate")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="UZS - O'zbek so'mi"
            readOnly
            className="w-fit"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("exchangeRate.currency")}</TableHead>
              <TableHead>{t("exchangeRate.purchase")}</TableHead>
              <TableHead>
                {t("exchangeRate.change")}
                <span className="text-sm"> (24h)</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currencyData.slice(0, visibleRows).map((currency) => (
              <TableRow key={currency.value}>
                <TableCell>
                  <div className="flex items-center">{currency.label}</div>
                </TableCell>
                <TableCell>{currency.rate}</TableCell>
                <TableCell
                  className={
                    currency.dif >= 0 ? "text-green-500" : "text-red-500"
                  }
                >
                  {currency.dif} so'm
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {visibleRows < currencyData.length && (
          <div className="mt-4 text-center">
            <CustomButton
              title={t("exchangeRate.loadMoreButton")}
              href="#"
              onClick={loadMore}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CurrencyTable;
