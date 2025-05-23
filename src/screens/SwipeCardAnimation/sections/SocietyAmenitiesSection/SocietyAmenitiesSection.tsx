import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SocietyAmenitiesSection = (): JSX.Element => {
  // Data for accommodation details
  const accommodationDetails = [
    {
      label: "Accommodation Type",
      value: "3 BHK",
    },
    {
      label: "Room Type",
      value: "Private",
    },
  ];

  return (
    <Card className="rounded-3xl bg-naturalnatural-1">
      <CardContent className="p-6 space-y-3">
        <div className="flex items-start gap-4 w-full">
          {accommodationDetails.map((detail, index) => (
            <div key={index} className="flex flex-col items-start gap-1 flex-1">
              <p className="w-full font-medium text-naturalnatural-8 text-xs">
                {detail.label}
              </p>
              <p className="w-full font-medium text-naturalnatural-13 text-xl">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
