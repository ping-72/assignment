import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FlatematePreferencesSection = (): JSX.Element => {
  return (
    <Card className="rounded-3xl bg-naturalnatural-1">
      <CardContent className="p-6 flex flex-col items-start gap-3">
        <div className="flex items-center gap-6 w-full">
          <img
            className="w-20 h-20 object-cover rounded-md"
            alt="Property thumbnail"
            src="/image-1585-2.png"
          />

          <div className="flex flex-col items-start gap-1 flex-1">
            <h3 className="w-full [font-family:'Satoshi-Black',Helvetica] font-black text-naturalnatural-13 text-2xl leading-normal">
              3BHK Flat in HSR Layout
            </h3>
            <p className="w-full [font-family:'Satoshi-Medium',Helvetica] font-medium text-naturalnatural-8 text-base leading-normal">
              BM Mystic Greens, Sector 2, HSR Layout, Bangalore
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
