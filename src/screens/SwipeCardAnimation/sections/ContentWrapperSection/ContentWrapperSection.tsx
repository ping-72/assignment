import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentWrapperSection = (): JSX.Element => {
  // Data for the pagination dots
  const totalSlides = 15;
  const currentSlide = 1;
  const dots = Array.from({ length: 5 }, (_, i) => i === 0);

  return (
    <Card className="flex flex-col h-60 relative rounded-3xl overflow-hidden border-0 [background:url(..//frame-1410125461-2.png)_50%_50%_/_cover]">
      <CardContent className="flex flex-col justify-between h-full p-4">
        {/* Top section with AI badge */}
        <div className="flex justify-end w-full">
          <div className="inline-flex items-center gap-2 p-2 bg-[#000000bf] rounded-lg">
            <div className="relative w-4 h-4">
              <img
                className="absolute w-[13px] h-[15px] top-px left-px"
                alt="Group"
                src="/group-275.png"
              />
            </div>
            <span className="[background:linear-gradient(270deg,rgba(251,151,177,1)_0%,rgba(128,222,236,1)_50%,rgba(199,82,225,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold text-transparent text-xs">
              Reimagine with AI
            </span>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between w-full">
          <Button
            variant="outline"
            size="icon"
            className="w-[34px] h-[34px] p-2 bg-white rounded-full border border-gray-300 opacity-80"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-[34px] h-[34px] p-2 bg-white rounded-full border border-gray-300 opacity-80"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>

        {/* Bottom section with counter and pagination */}
        <div className="flex flex-col items-end gap-2.5">
          <Badge
            variant="outline"
            className="px-2 py-1 bg-[#00000080] text-naturalnatural-1 border-0 rounded-[27.13px]"
          >
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[10px] leading-[12.5px]">
              {currentSlide}/{totalSlides}
            </span>
          </Badge>

          <div className="flex items-center justify-center gap-1 w-full -mt-2.5">
            {dots.map((isActive, index) => (
              <div
                key={index}
                className={`${
                  isActive
                    ? "w-4 h-2 bg-orangeorange-6"
                    : "w-2 h-2 bg-orangeorange-1"
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
