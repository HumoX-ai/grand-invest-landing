import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import SearchSection from "@/components/Downloads/SearchSection";
import CategoryButton, {
  ICategory,
} from "@/components/Downloads/CategoryButton";
import DownloadCard from "@/components/Downloads/DownloadCard";
import ContactUs from "@/components/ContactUs";
import { useTranslation } from "react-i18next";

const Downloads = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const location = useLocation();
  const { t } = useTranslation();
  const categories: ICategory[] = [
    { name: t("categories.all") },
    { name: t("categories.signals"), icon: <SearchIcon size={18} /> },
    { name: t("categories.learningTrading"), icon: <SearchIcon size={18} /> },
    { name: t("categories.robots"), icon: <SearchIcon size={18} /> },
  ];

  const data = [
    {
      id: 1,
      img: "/file_card.png",
      title: "Quarterly market analysis report",
      downloads: "Downloads",
      category: "Trading",
    },
    {
      id: 2,
      img: "/file_card.png",
      title: "Quarterly market analysis report",
      downloads: "Downloads",
      category: "Trading",
    },
    {
      id: 3,
      img: "/file_card.png",
      title: "Quarterly market analysis report",
      downloads: "Downloads",
      category: "Trading",
    },
    {
      id: 4,
      img: "/file_card.png",
      title: "Quarterly market analysis report",
      downloads: "Downloads",
      category: "Trading",
    },
    {
      id: 5,
      img: "/file_card.png",
      title: "Quarterly market analysis report",
      downloads: "Downloads",
      category: "Trading",
    },
  ];

  const isDetailPage = location.pathname.includes("/downloads/");

  return (
    <div>
      <SearchSection />
      {!isDetailPage && (
        <>
          <div className="">
            <div className="px-6 md:px-12 2xl:px-[140px] max-w-[2000px] mx-auto mt-10 flex flex-wrap items-center justify-center gap-6">
              {categories.map((category, index) => (
                <CategoryButton
                  key={index}
                  category={category}
                  isActive={activeCategory === category.name}
                  onClick={() => setActiveCategory(category.name)}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-16 mt-10 md:px-12 2xl:px-[140px] max-w-[2000px] mx-auto mb-14">
              {data.map((item, index) => (
                <DownloadCard key={index} item={item} />
              ))}
            </div>
          </div>
        </>
      )}
      <Outlet context={data} />
      <ContactUs />
    </div>
  );
};

export default Downloads;
