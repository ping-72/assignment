import React from "react";
import { Badge } from "../../../../components/ui/badge";

// Define amenities data for mapping
const amenities = [
  { id: 1, name: "RO", icon: "/exercise-12.svg" },
  { id: 2, name: "TV", icon: "/exercise-14.svg" },
];

export const RentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-2 w-full">
      <h3 className="font-medium text-naturalnatural-8 text-xs [font-family:'Satoshi-Medium',Helvetica]">
        Flat Amenities
      </h3>

      <div className="flex flex-wrap gap-4 w-full">
        {amenities.map((amenity) => (
          <Badge
            key={amenity.id}
            variant="outline"
            className="flex items-center gap-1 p-2 bg-[#fef4e0] rounded-full border-none w-[126px]"
          >
            <img className="w-4 h-4" alt={amenity.name} src={amenity.icon} />
            <span className="font-medium text-naturalnatural-13 text-xs tracking-[0.05px] [font-family:'Satoshi-Medium',Helvetica]">
              {amenity.name}
            </span>
          </Badge>
        ))}
      </div>
    </section>
  );
};
