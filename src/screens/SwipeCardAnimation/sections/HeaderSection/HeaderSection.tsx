import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const HeaderSection = (): JSX.Element => {
  // Data for amenities to enable mapping
  const amenities = [
    { id: 1, name: "RO", icon: "/exercise-19.svg" },
    { id: 2, name: "TV", icon: "/exercise-5.svg" },
  ];

  return (
    <section className="flex flex-col items-start gap-2 w-full">
      <h3 className="font-medium text-naturalnatural-8 text-xs [font-family:'Satoshi-Medium',Helvetica]">
        Flat Amenities
      </h3>

      <div className="flex items-start gap-4 w-full">
        {amenities.map((amenity) => (
          <Badge
            key={amenity.id}
            variant="outline"
            className="flex items-center gap-1 p-2 bg-[#fef4e0] rounded-full w-[126px] hover:bg-[#fef4e0]"
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
