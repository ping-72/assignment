import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const FlatAmenitiesSection = (): JSX.Element => {
  return (
    <Card className="flex-1 w-full rounded-3xl bg-naturalnatural-1">
      <CardContent className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-6 w-full">
          <Avatar className="w-20 h-20 rounded-none">
            <AvatarImage
              src="/image-1585-2.png"
              alt="Property image"
              className="object-cover"
            />
            <AvatarFallback className="rounded-none">Property</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1 flex-1">
            <h3 className="font-black text-2xl text-naturalnatural-13 [font-family:'Satoshi-Black',Helvetica] leading-normal">
              3BHK Flat in HSR Layout
            </h3>
            <p className="text-naturalnatural-8 text-base [font-family:'Satoshi-Medium',Helvetica] font-medium leading-normal">
              BM Mystic Greens, Sector 2, HSR Layout, Bangalore
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
