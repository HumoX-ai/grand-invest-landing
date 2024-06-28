import { Input } from "@/components/ui/input";
import CustomButton from "@/components/CustomButton";
import { SearchIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const SearchSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-6 md:px-12 2xl:px-[140px] h-screen bg-[url('/download_bg.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center">
      <div className="backdrop-blur-sm bg-white/10 rounded-xl px-4 lg:px-24 py-16 text-center text-white">
        <h1 className="text-3xl font-medium">{t("downloads.title")}</h1>
        <p className="pt-4">{t("downloads.subtitle")}</p>
        <div className="mt-8 bg-white p-2 rounded-xl gap-4 flex items-center shadow-lg">
          <div className="px-2 py-2 items-center hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M10.6922 0.923126H3.30768C2.55768 0.923126 2.0673 1.32697 1.92307 2.07696L1 6.46155V9.6923C1.00107 10.0592 1.14729 10.4108 1.40672 10.6702C1.66615 10.9296 2.01771 11.0758 2.38461 11.0769H11.6153C11.9822 11.0758 12.3338 10.9296 12.5932 10.6702C12.8526 10.4108 12.9989 10.0592 12.9999 9.6923V6.46155L12.0768 2.07696C11.9326 1.29812 11.4134 0.923126 10.6922 0.923126Z"
                stroke="#4A5661"
                stroke-linejoin="round"
              />
              <path
                d="M1 6.46158H5.15382"
                stroke="#4A5661"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.8457 6.46158H12.9995"
                stroke="#4A5661"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.1543 6.46158C5.1543 6.95121 5.3488 7.42078 5.69502 7.767C6.04124 8.11322 6.51081 8.30772 7.00044 8.30772C7.49007 8.30772 7.95964 8.11322 8.30586 7.767C8.65208 7.42078 8.84658 6.95121 8.84658 6.46158"
                stroke="#4A5661"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.76855 2.76926H10.23"
                stroke="#4A5661"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.30762 4.61539H10.6922"
                stroke="#4A5661"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="ml-2 text-gray-600">{t("downloads.files")}</span>
          </div>
          <hr className="w-px h-6 bg-gray-200 hidden lg:block" />
          <Input
            type="text"
            placeholder={t("downloads.inputPlaceholder")}
            className="flex-1 px-4 py-2 text-gray-600 bg-[#ffffff] border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <CustomButton
            className="px-3"
            title={
              <span className="hidden lg:block ml-0 lg:ml-2">
                {t("downloads.button")}
              </span>
            }
            icon={<SearchIcon className="h-5 w-5 " />}
            href="#"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
