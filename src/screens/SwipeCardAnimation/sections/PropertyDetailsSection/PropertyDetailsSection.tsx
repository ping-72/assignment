import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const PropertyDetailsSection = (): JSX.Element => {
  // Data for room amenities to enable mapping
  const roomAmenities = [
    { icon: "/exercise-18.svg", label: "AC" },
    { icon: "/exercise-11.svg", label: "Wardrobe" },
    { icon: "/exercise-16.svg", label: "Study Table" },
    { icon: "/exercise-13.svg", label: "AC" },
  ];

  return (
    <section className="flex flex-col gap-2 w-full">
      <h3 className="font-medium text-naturalnatural-8 text-xs [font-family:'Satoshi-Medium',Helvetica]">
        Room Amenities
      </h3>

      <div className="flex flex-wrap gap-4 w-full">
        {roomAmenities.map((amenity, index) => (
          <Badge
            key={index}
            variant="outline"
            className="flex items-center gap-1 p-2 bg-[#fef4e0] rounded-full border-none text-naturalnatural-13"
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
