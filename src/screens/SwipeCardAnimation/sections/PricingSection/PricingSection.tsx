import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const PricingSection = (): JSX.Element => {
  // Define amenities data for mapping
  const amenities = [
    { icon: "/exercise-10.svg", label: "AC" },
    { icon: "/exercise-4.svg", label: "Wardrobe" },
    { icon: "/exercise-7.svg", label: "Study Table" },
    { icon: "/exercise-6.svg", label: "AC" },
  ];

  return (
    <section className="flex flex-col items-start gap-2 w-full">
      <h3 className="font-medium text-naturalnatural-8 text-xs [font-family:'Satoshi-Medium',Helvetica]">
        Room Amenities
      </h3>

      <div className="flex items-start gap-4 w-full flex-wrap">
        {amenities.map((amenity, index) => (
          <Badge
            key={index}
            className="flex items-center gap-1 p-2 bg-[#fef4e0] text-naturalnatural-13 hover:bg-[#fef4e0] rounded-[1000px] w-auto"
            variant="outline"
          >
            <img
              className="w-4 h-4"
              alt={`${amenity.label} icon`}
              src={amenity.icon}
            />
            <span className="font-medium text-xs tracking-[0.05px] [font-family:'Satoshi-Medium',Helvetica]">
              {amenity.label}
            </span>
          </Badge>
        ))}
      </div>
    </section>
  );
};
