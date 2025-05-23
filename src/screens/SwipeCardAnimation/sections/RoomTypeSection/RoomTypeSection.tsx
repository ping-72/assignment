import { StarIcon } from "lucide-react";
import React from "react";

// Define amenities data for easy mapping
const amenities = [
  {
    id: 1,
    name: "Pool",
    icon: <StarIcon className="w-4 h-4" />,
  },
];

export const RoomTypeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2 w-full">
      <h3 className="w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-naturalnatural-8 text-xs">
        Society Amenities
      </h3>

      <div className="flex flex-wrap items-start gap-4 w-full">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="flex items-center gap-1 p-2 bg-[#fef4e0] rounded-[1000px] w-fit"
          >
            {amenity.icon}
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-naturalnatural-13 text-xs tracking-[0.05px]">
              {amenity.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
