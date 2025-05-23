import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const LikesSection = (): JSX.Element => {
  // Data for the accommodation details
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
      <CardContent className="p-6 flex flex-col gap-3">
        <div className="flex items-start gap-4 w-full">
          {accommodationDetails.map((detail, index) => (
            <div key={index} className="flex flex-col items-start gap-1 flex-1">
              <div className="self-stretch font-medium text-naturalnatural-8 text-xs">
                {detail.label}
              </div>
              <div className="self-stretch font-medium text-naturalnatural-13 text-xl">
                {detail.value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
