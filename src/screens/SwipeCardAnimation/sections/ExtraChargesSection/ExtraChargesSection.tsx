import { StarIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const ExtraChargesSection = (): JSX.Element => {
  // Data for amenities that can be mapped over
  const amenities = [
    {
      icon: <StarIcon className="h-4 w-4" />,
      name: "Pool",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-2 w-full">
      <h3 className="text-xs font-medium text-naturalnatural-8 font-['Satoshi-Medium',Helvetica]">
        Society Amenities
      </h3>

      <div className="flex flex-wrap items-start gap-4 w-full">
        {amenities.map((amenity, index) => (
          <Badge
            key={index}
            variant="outline"
            className="flex items-center gap-1 p-2 bg-[#fef4e0] rounded-full border-none"
          >
            {amenity.icon}
            <span className="text-xs font-medium text-naturalnatural-13 tracking-[0.05px] font-['Satoshi-Medium',Helvetica]">
              {amenity.name}
            </span>
          </Badge>
        ))}
      </div>
    </section>
  );
};
