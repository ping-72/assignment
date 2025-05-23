import { ChevronDownIcon, CopyIcon, HeartIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const MainContentSection = (): JSX.Element => {
  // Navigation items data for mapping
  const navItems = [
    {
      id: "discover",
      label: "Discover",
      icon: "/group-274.png",
      isActive: true,
    },
    {
      id: "likes",
      label: "Likes",
      icon: "/favorite.svg",
      isActive: false,
    },
    {
      id: "matches",
      label: "Matchs",
      icon: "/icon---heroicons---outline---duplicate.svg",
      isActive: false,
    },
  ];

  return (
    <nav className="flex items-center justify-end gap-4 w-full">
      <div className="flex items-center">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-md ${
              item.isActive ? "text-orangeorange-6" : "text-naturalnatural-13"
            }`}
          >
            {item.id === "discover" ? (
              <div className="relative w-5 h-5">
                <img
                  className="absolute w-[18px] h-[18px] top-px left-px"
                  alt="Discover icon"
                  src={item.icon}
                />
              </div>
            ) : item.id === "likes" ? (
              <HeartIcon className="w-[18px] h-[18px]" />
            ) : (
              <CopyIcon className="w-[18px] h-[18px]" />
            )}
            <span
              className={`font-medium text-base leading-4 whitespace-nowrap [font-family:'Satoshi-Medium',Helvetica]`}
            >
              {item.label}
            </span>
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        className="flex items-center gap-[5px] px-2 py-1.5 rounded border border-solid border-gray-300"
      >
        <Avatar className="w-[26px] h-[26px]">
          <img
            className="w-full h-full object-cover"
            alt="User avatar"
            src="/rectangle-18.png"
          />
        </Avatar>
        <ChevronDownIcon className="w-[18px] h-[18px]" />
      </Button>
    </nav>
  );
};
