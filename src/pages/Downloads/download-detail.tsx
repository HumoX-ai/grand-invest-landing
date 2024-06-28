/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomButton from "@/components/CustomButton";
import DownloadCard, {
  DownloadCardProps,
} from "@/components/Downloads/DownloadCard";
import { Download } from "lucide-react";
import { useOutletContext, useParams } from "react-router-dom";

const DownloadDetail = () => {
  const data: DownloadCardProps[] = useOutletContext();
  const { id } = useParams();
  const items = [
    {
      id: 1,
      img: "/file_card.png",
      title: "Quarterly market analysis report",
      downloads: "Downloads",
      category: "Trading",
      description:
        "The Quarterly Market Analysis Report offers a comprehensive overview of the latest trends, developments, and projections in the financial markets over the past quarter. It delves into market performance, economic indicators, geopolitical events, sector analysis, investment trends, and future outlook.This report serves as a vital resource for investors, financial analysts, and market enthusiasts seeking to stay informed and make informed investment decisions.",
    },
    {
      id: 2,
      img: "/files.png",
      title: "Quarterly market analysis report",
      downloads: "Downloads",
      category: "Trading",
      description:
        "The Quarterly Market Analysis Report offers a comprehensive overview of the latest trends, developments, and projections in the financial markets over the past quarter. It delves into market performance, economic indicators, geopolitical events, sector analysis, investment trends, and future outlook.This report serves as a vital resource for investors, financial analysts, and market enthusiasts seeking to stay informed and make informed investment decisions.",
    },
    {
      id: 3,
      img: "/files.png",
      title: "Quarterly market analysis report",
      downloads: "Downloads",
      category: "Trading",
      description:
        "The Quarterly Market Analysis Report offers a comprehensive overview of the latest trends, developments, and projections in the financial markets over the past quarter. It delves into market performance, economic indicators, geopolitical events, sector analysis, investment trends, and future outlook.This report serves as a vital resource for investors, financial analysts, and market enthusiasts seeking to stay informed and make informed investment decisions.",
    },
    {
      id: 4,
      img: "/files.png",
      title: "Quarterly market analysis report",
      downloads: "Downloads",
      category: "Trading",
      description:
        "The Quarterly Market Analysis Report offers a comprehensive overview of the latest trends, developments, and projections in the financial markets over the past quarter. It delves into market performance, economic indicators, geopolitical events, sector analysis, investment trends, and future outlook.This report serves as a vital resource for investors, financial analysts, and market enthusiasts seeking to stay informed and make informed investment decisions.",
    },
    {
      id: 5,
      img: "/files.png",
      title: "Quarterly market analysis report",
      downloads: "Downloads",
      category: "Trading",
      description:
        "The Quarterly Market Analysis Report offers a comprehensive overview of the latest trends, developments, and projections in the financial markets over the past quarter. It delves into market performance, economic indicators, geopolitical events, sector analysis, investment trends, and future outlook.This report serves as a vital resource for investors, financial analysts, and market enthusiasts seeking to stay informed and make informed investment decisions.",
    },
  ];

  const item = items.find((item) => item.id.toString() === id);

  if (!item) {
    return <p>Download not found</p>;
  }

  return (
    <div className="px-6 md:px-12 2xl:px-[140px] max-w-[2000px] mx-auto my-16">
      <h1 className="text-3xl lg:text-4xl">Quarterly market analysis report</h1>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex ">
          <img
            src={item.img}
            className="w-full md:w-[300px] lg:w-[400px] object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 justify-around h-full">
          <p>{item.description}</p>
          <div
            onClick={() =>
              window.open(
                "https://zoinet.org/wp-content/uploads/2022/05/UZB-Redlist-uz.pdf",
                "_blank"
              )
            }
          >
            <CustomButton
              className="w-full lg:w-fit"
              title="Download"
              href=""
              icon={<Download size={18} className="mr-2" />}
            />
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end mt-16">
        <CustomButton
          title="Learn More"
          href="/downloads"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
            >
              <path
                d="M7.77479 0.251184C7.9506 0.0903511 8.18902 0 8.43761 0C8.68621 0 8.92462 0.0903511 9.10043 0.251184L14.7255 5.39864C14.9013 5.55952 15 5.77769 15 6.00518C15 6.23267 14.9013 6.45084 14.7255 6.61172L9.10043 11.7592C8.92362 11.9155 8.6868 12.0019 8.44099 12C8.19517 11.998 7.96003 11.9078 7.78621 11.7487C7.61239 11.5897 7.51379 11.3745 7.51166 11.1495C7.50952 10.9246 7.60402 10.7079 7.77479 10.5461L11.7995 6.86309H0.937513C0.688869 6.86309 0.450409 6.7727 0.274591 6.61181C0.0987735 6.45092 0 6.23271 0 6.00518C0 5.77765 0.0987735 5.55944 0.274591 5.39855C0.450409 5.23766 0.688869 5.14727 0.937513 5.14727H11.7995L7.77479 1.46427C7.59904 1.30339 7.5003 1.08521 7.5003 0.857726C7.5003 0.630239 7.59904 0.412066 7.77479 0.251184Z"
                fill="#2C353E"
              />
            </svg>
          }
          iconRight
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-16 mt-10  mx-auto mb-14">
        {data.slice(0, 5).map((item: any, index: number) => (
          <DownloadCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DownloadDetail;
