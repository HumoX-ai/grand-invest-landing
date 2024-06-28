import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

export interface DownloadCardProps {
  item: {
    id: number;
    img: string;
    title: string;
    downloads: string;
    category: string;
  };
}

const DownloadCard: React.FC<DownloadCardProps> = ({ item }) => {
  return (
    <Link to={`/downloads/${item.id}`}>
      <Card className="rounded-3xl shadow-lg dark:bg-[#152737] mx-6 md:mx-0">
        <CardContent className="p-0 relative">
          <img src={item.img} className="w-full rounded-lg" alt={item.title} />
          <div className="absolute top-4 right-4 bg-[#7d8a98] text-white px-3 py-1 rounded-full text-xs">
            {item.category}
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-col">
          <p>{item.title}</p>
          <div className="mt-6 flex w-full justify-between items-center text-xs text-[#7D8A98]">
            <p>{item.downloads}: 207</p>
            <div className="bg-gradient-to-r from-[#ea9c14] to-[#ffd765] py-1.5 px-2 rounded-sm cursor-pointer">
              <Download size={16} />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default DownloadCard;
