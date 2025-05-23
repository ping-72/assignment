import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ContactSection } from "./sections/ContactSection";
import { ImageCarouselSection } from "./sections/ImageCarouselSection";
import { LikesSection } from "./sections/LikesSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { PropertyDetailsSection } from "./sections/PropertyDetailsSection";
import { RentSection } from "./sections/RentSection/RentSection";
import { SecurityDepositSection } from "./sections/SecurityDepositSection";

export const SwipeCardAnimation = (): JSX.Element => {
  const [animation, setAnimation] = useState<null | "like" | "dislike">(null);

  const handleLike = () => {
    setAnimation("like");
    setTimeout(() => setAnimation(null), 900);
  };
  const handleDislike = () => {
    setAnimation("dislike");
    setTimeout(() => setAnimation(null), 900);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Like/Dislike Animation Overlay */}
      {animation && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 animate-fade-in-out ${
            animation === "like" ? "bg-[#ed6530]/80" : "bg-black/80"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <div
              className={`rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                animation === "like"
                  ? "bg-orange-500 scale-110"
                  : "bg-black scale-100"
              }`}
              style={{ width: 180, height: 180 }}
            >
              <img
                src={animation === "like" ? "./like.svg" : "./component-1.svg"}
                alt={animation === "like" ? "Like" : "Dislike"}
                className="w-24 h-24 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-white">
        <div className="relative w-full">
          <div className="w-full overflow-hidden">
            <div className="relative w-full">
              {/* Background decorative elements */}
              <div className="absolute w-full h-full top-0 left-0 -z-10">
                <img
                  className="absolute w-[110px] h-[71px] top-[217px] left-[948px]"
                  alt="Vector"
                  src="./vector-2.svg"
                />
                <img
                  className="absolute w-[94px] h-[95px] top-[110px] left-[878px]"
                  alt="Vector"
                  src="./vector-7.svg"
                />
                <img
                  className="absolute w-[133px] h-[133px] top-[334px] left-[545px]"
                  alt="Vector"
                  src="./vector-4.svg"
                />
                <img
                  className="absolute w-[88px] h-[61px] top-[271px] left-[463px]"
                  alt="Vector"
                  src="./vector-6.svg"
                />
                <img
                  className="absolute w-[122px] h-[100px] top-[285px] left-[905px]"
                  alt="Vector"
                  src="./vector.svg"
                />
                <img
                  className="absolute w-[72px] h-[69px] top-[416px] left-0"
                  alt="Vector"
                  src="./vector-5.svg"
                />
                <img
                  className="absolute w-[62px] h-[43px] top-[572px] left-[1353px]"
                  alt="Vector"
                  src="./vector-1.svg"
                />
                <img
                  className="absolute w-[43px] h-[46px] top-[680px] left-[906px]"
                  alt="Vector"
                  src="./vector-104.svg"
                />
              </div>
            </div>
          </div>

          {/* Header with logo and navigation */}
          <header className="flex w-full items-center px-20 py-3 sticky top-0 left-0 bg-white border-b border-[#c8c8c8] z-10">
            <div className="flex items-center gap-2">
              <div className="relative w-[44.41px] h-10">
                <img
                  className="absolute w-[13px] h-10 top-0 left-0"
                  alt="Rectangle"
                  src="./rectangle-18822.svg"
                />
                <img
                  className="absolute w-[13px] h-10 top-0 left-[31px]"
                  alt="Rectangle"
                  src="./rectangle-18823.svg"
                />
                <div className="absolute w-[13px] h-[13px] top-2 left-4 bg-orangeorange-6 rounded-[6.53px]" />
              </div>
              <div className="font-extrabold text-2xl">
                <span className="text-black">mansio.</span>
                <span className="text-[#ed6530]">ai</span>
              </div>
            </div>
            <MainContentSection />
          </header>

          {/* Main content area */}
          <main className="w-full pt-16">
            <div className="max-w-[1240px] mx-auto relative">
              {/* Fake stacked cards for illusion */}
              <Card className="absolute w-[1000px] h-[390px] top-[-70px] left-[120px] bg-[#fef4e0] rounded-[40px] border-[0.97px] border-solid border-[#f1f1f1] shadow-[0px_-3.88px_23.25px_#0000001a] scale-95 z-0" />
              <Card className="absolute w-[1096px] h-[391px] top-[-55px] left-[72px] bg-[#fef4e0] rounded-[40px] border-[0.97px] border-solid border-[#f1f1f1] shadow-[0px_-3.88px_23.25px_#0000001a] scale-98 z-0" />
              <Card className="absolute w-[1192px] h-[390px] top-[-39px] left-6 bg-[#fef4e0] rounded-[40px] border-[0.97px] border-solid border-[#f1f1f1] shadow-[0px_-3.88px_23.25px_#0000001a] z-0" />
              {/* Main card */}
              <Card className="flex flex-col w-full h-[528px] gap-4 p-6 bg-naturalnatural-3 rounded-[40px] shadow-[0px_4px_10px_#00000026] relative z-10">
                <CardContent className="p-0 flex flex-col gap-4 h-9/10">
                  {/* Top section with image carousel and contact info */}
                  <div className="flex items-start gap-4 w-full overflow-y-auto">
                    <div className="w-1/2">
                      <ImageCarouselSection />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 flex-1">
                      <ContactSection />
                      <div className="flex items-start gap-4 w-full">
                        <LikesSection />
                        <Card className="flex-1">
                          <CardContent className="p-6">
                            <div className="flex flex-col gap-1">
                              <div className="font-medium text-naturalnatural-8 text-xs">
                                Availability
                              </div>
                              <div className="font-medium text-naturalnatural-13 text-xl">
                                1 May
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Bottom section with property details and pricing */}
                  <div className="flex flex-col gap-4 flex-1 w-full">
                    <div className="flex items-start gap-4 flex-1 w-full">
                      {/* Rent and deposit info */}
                      <Card className="w-[260px]">
                        <CardContent className="p-6 flex flex-col justify-between h-full gap-2">
                          <div className="flex flex-col gap-1">
                            <div className="font-medium text-naturalnatural-8 text-xs">
                              Rent
                            </div>
                            <div className="font-medium text-naturalnatural-13 text-xl">
                              25K per month
                            </div>
                          </div>

                          <div className="flex flex-col gap-1">
                            <div className="font-medium text-naturalnatural-8 text-xs">
                              Security Deposit
                            </div>
                            <div className="font-medium text-naturalnatural-13 text-xl">
                              50K
                            </div>
                          </div>

                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <div className="font-medium text-naturalnatural-8 text-xs">
                                Extra
                              </div>
                              <img
                                className="w-4 h-4"
                                alt="Information"
                                src="./pajamas-information-o.svg"
                              />
                            </div>
                            <div className="font-medium text-naturalnatural-13 text-xl">
                              2.5K per month
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Property details */}
                      <Card className="w-[560px]">
                        <CardContent className="px-6 py-4 flex flex-col gap-3">
                          <div className="flex flex-col gap-2">
                            <PropertyDetailsSection />
                            <RentSection />
                            <SecurityDepositSection />
                          </div>
                        </CardContent>
                      </Card>

                      {/* Flatmate preferences */}
                      <Card className="w-[340px]">
                        <CardContent className="p-6 flex flex-col gap-4">
                          <div className="flex flex-col gap-1">
                            <div className="font-medium text-naturalnatural-8 text-xs">
                              Desired Flatmate Preference
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-solid border-[#d9d9d9]">
                                <img
                                  className="w-4 h-4"
                                  alt="Gender"
                                  src="./tabler-gender-transgender.svg"
                                />
                                <div className="font-medium text-naturalnatural-13 text-sm">
                                  No preference
                                </div>
                              </div>
                              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-solid border-[#d9d9d9]">
                                <img
                                  className="w-4 h-4"
                                  alt="Food"
                                  src="./fluent-food-16-filled.svg"
                                />
                                <div className="font-medium text-naturalnatural-13 text-sm">
                                  No preference
                                </div>
                              </div>
                              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-solid border-[#d9d9d9]">
                                <img
                                  className="w-4 h-4"
                                  alt="Smoking"
                                  src="./ph-cigarette-fill.svg"
                                />
                                <div className="font-medium text-naturalnatural-13 text-sm">
                                  No preference
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-1">
                            <div className="font-medium text-naturalnatural-8 text-xs">
                              Flatmates
                            </div>
                            <div className="flex items-center gap-2">
                              <div
                                className="w-9 h-9 rounded-3xl border border-solid border-[#f0f0f0] bg-cover bg-center"
                                style={{
                                  backgroundImage:
                                    "url(./frame-1410125523-2.png)",
                                }}
                              />
                              <div
                                className="w-9 h-9 rounded-3xl border border-solid border-[#f0f0f0] bg-cover bg-center"
                                style={{
                                  backgroundImage:
                                    "url(./frame-1410125514-1.png)",
                                }}
                              />
                              <div className="w-9 h-9 bg-orangeorange-6 rounded-3xl" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action buttons */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <Button
                  variant="default"
                  size="icon"
                  className="w-14 h-14 rounded-full bg-naturalnatural-13 shadow-[0px_16.33px_11.67px_#0000001a]"
                  onClick={handleDislike}
                >
                  <img
                    className="w-7 h-7"
                    alt="Dislike"
                    src="./component-1.svg"
                  />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-14 h-14 rounded-full border-black shadow-[0px_16.33px_11.67px_#0000001a]"
                >
                  <img
                    className="w-7 h-7"
                    alt="Refresh"
                    src="./stash-arrow-retry.svg"
                  />
                </Button>
                <Button
                  variant="default"
                  size="icon"
                  className="w-14 h-14 rounded-full bg-orangeorange-6 shadow-[0px_16.33px_11.67px_#0000001a]"
                  onClick={handleLike}
                >
                  <img className="w-7 h-7" alt="Like" src="./like.svg" />
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
