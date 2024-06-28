import React from "react";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AiFillStar } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/avatar.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam?",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/avatar2.png",
      text: "Quisquam, doloribus. Recusandae libero tempore omnis, accusantium deserunt sequi excepturi dignissimos.",
      rating: 4,
    },
    {
      id: 3,
      name: "Alice Johnson",
      avatar: "/avatar3.png",
      text: "Temporibus ex ullam, reiciendis culpa optio quia fuga veritatis laborum cumque!",
      rating: 4,
    },
    {
      id: 4,
      name: "Bob Brown",
      avatar: "/avatar4.png",
      text: "Nostrum facilis illum voluptate perspiciatis deserunt? Sapiente, quibusdam. Iure, autem earum.",
      rating: 5,
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <AiFillStar
            key={index}
            className={`${
              index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[url('/reviews_bg.svg')] dark:bg-none dark:bg-[#041628] bg-no-repeat bg-center bg-contain w-full">
      <div className="py-24 w-full px-6 md:px-12 2xl:px-[140px] max-w-[2000px] mx-auto">
        <span className="px-4 py-1 bg-gradient-light-right rounded-md">
          {t("reviews.title")}
        </span>
        <h1 className="text-2xl font-semibold lg:text-4xl gradient-text-light bg-clip-text text-transparent py-8">
          {t("reviews.head")}
        </h1>

        <Carousel
          opts={{
            align: "end",
          }}
          className="w-full"
          plugins={[plugin.current]}
        >
          <CarouselContent className="items-stretch">
            {data.map((review) => (
              <CarouselItem
                key={review.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <Card className="h-full bg-[#efebe4] dark:bg-[#152737]">
                    <CardContent className="flex flex-col h-full p-6">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>{review.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-sm">{review.name}</h2>
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="mt-2 text-sm flex-1">{review.text}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
