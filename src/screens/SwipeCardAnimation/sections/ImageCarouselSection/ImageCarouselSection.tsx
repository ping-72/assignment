import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const ImageCarouselSection = (): JSX.Element => {
  // Data for carousel images
  const images = [
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      alt: "Modern living room",
    },
    {
      url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      alt: "Kitchen area",
    },
    {
      url: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
      alt: "Master bedroom",
    },
    {
      url: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      alt: "Bathroom",
    },
    {
      url: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
      alt: "Balcony view",
    },
  ];

  const totalSlides = images.length;
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const dots = Array(5).fill(0);

  return (
    <Carousel
      className="relative h-60 rounded-3xl overflow-hidden"
      onSelect={(event: any) => setCurrentSlide(event + 1)}
    >
      <div className="absolute top-4 right-4 z-10">
        <Badge className="flex items-center gap-2 p-2 bg-[#000000bf] rounded-lg">
          <div className="relative w-4 h-4">
            <img
              className="absolute w-[13px] h-[15px] top-px left-px"
              alt="AI reimagine"
              src="./group-277.png"
            />
          </div>
          <span className="bg-gradient-to-r from-[rgba(251,151,177,1)] via-[rgba(128,222,236,1)] to-[rgba(199,82,225,1)] bg-clip-text text-transparent font-bold text-xs">
            Reimagine with AI
          </span>
        </Badge>
      </div>

      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-60">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute left-4 right-4 bottom-0 flex flex-col items-end mb-4 z-10">
        <Badge
          variant="outline"
          className="px-2 py-1 bg-[#00000080] text-naturalnatural-1 rounded-[27.13px] border-none"
        >
          <span className="font-medium text-[10px] leading-[12.5px]">
            {currentSlide}/{totalSlides}
          </span>
        </Badge>

        <div className="flex items-center justify-center gap-1 w-full mt-2.5">
          {dots.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded ${
                index === currentSlide - 1
                  ? "w-4 bg-orangeorange-6"
                  : "w-2 bg-orangeorange-1"
              }`}
            />
          ))}
        </div>
      </div>

      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[34px] p-2 bg-white/80 border-gray-300 rounded-full">
        <ChevronLeftIcon className="h-4 w-4" />
      </CarouselPrevious>

      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[34px] p-2 bg-white/80 border-gray-300 rounded-full">
        <ChevronRightIcon className="h-4 w-4" />
      </CarouselNext>
    </Carousel>
  );
};
