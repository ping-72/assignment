import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = (): JSX.Element => {
  return (
    <Card className="rounded-3xl bg-naturalnatural-1">
      <CardContent className="p-6">
        <div className="flex items-center gap-6">
          <img
            className="w-20 h-20 object-cover rounded-md"
            alt="Property thumbnail"
            src="./image-1585-2.png"
          />

          <div className="flex flex-col gap-1">
            <h3 className="font-black text-2xl text-naturalnatural-13 [font-family:'Satoshi-Black',Helvetica] leading-normal">
              3BHK Flat in HSR Layout
            </h3>
            <p className="text-base text-naturalnatural-8 [font-family:'Satoshi-Medium',Helvetica] font-medium leading-normal">
              BM Mystic Greens, Sector 2, HSR Layout, Bangalore
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};