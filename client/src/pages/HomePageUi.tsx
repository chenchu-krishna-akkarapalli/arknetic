import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FeaturedModelsSection } from "./sections/FeaturedModelsSection";
import { NewArrivalsGallerySection } from "./sections/NewArrivalsGallerySection";
import { NewArrivalsInfoSection } from "./sections/NewArrivalsInfoSection";
import { OfficeWearModelsSection } from "./sections/OfficeWearModelsSection";
import { OfficeWearProductListSection } from "./sections/OfficeWearProductListSection";
import { PromotionalVideosSection } from "./sections/PromotionalVideosSection";
import { QuickCollectionsSection } from "./sections/QuickCollectionsSection";
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

const categoryCards = [
  {
    image: "/figmaAssets/frame-19-3.png",
    alt: "Frame",
    className: "w-[330px] h-[482px]",
  },
  {
    image: "/figmaAssets/frame-20-3.png",
    alt: "Frame",
    className: "w-[330px] h-[482px]",
  },
  {
    image: "/figmaAssets/frame-21-4.png",
    alt: "Frame",
    className: "w-[330px] h-[482px]",
  },
  {
    image: "/figmaAssets/frame-22-4.png",
    alt: "Frame",
    className: "w-[330px] h-[482px]",
  },
];

export const HomePageUi = (): JSX.Element => {
  const [, setLocation] = useLocation();

  return (
    <div className="bg-white w-full overflow-x-hidden flex flex-col relative">
      <HeaderSection />

      {/* //hero-section// */}

      <section className="z-[11] w-full h-[837px] mt-20 flex relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Assets/hero.mp4" type="video/mp4" />
        </video>
        <img
          className="mt-[439px] w-[683px] h-[300px] ml-[37px] relative z-10"
          alt="Frame"
          src="/figmaAssets/frame-18-1.png"
        />
      </section>

      <section className="flex flex-wrap z-10 w-full px-[30px] relative mt-[45px] items-center justify-center gap-[20px]">
        {categoryCards.map((card, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <img
              className={`relative ${card.className} object-cover`}
              alt={card.alt}
              src={card.image}
            />
            <Button
              onClick={() => setLocation("/product/1")}
              className="absolute bottom-6 w-[200px] h-[57px] bg-white hover:bg-gray-50 text-[#006838] [font-family:'Italiana',Helvetica] text-[32px] font-normal tracking-wide shadow-md border border-[#006838]/20 rounded-none cursor-pointer"
            >
              Shop Now
            </Button>
          </div>
        ))}
      </section>

      <section className="w-full max-w-[1381px] mx-auto px-4 mt-10">
        <div className="bg-[#f6faf8] border border-[#0068381a] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="[font-family:'Poppins',Helvetica] text-[13px] tracking-[1.5px] uppercase text-[#006838]">
                Brand Portfolio
              </p>
              <h2 className="[font-family:'Italiana',Helvetica] text-[40px] leading-[44px] text-black mt-2">
                Two Labels. One Signature Craft.
              </h2>
              <p className="[font-family:'Poppins',Helvetica] text-[15px] text-[#2f2f2f] mt-3 max-w-[680px]">
                Arknetic  Fashion curates expressive everyday styling, while Arknetic Collections focuses on elevated designer edits for statement occasions.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => setLocation("/collections")}
              className="h-[47px] px-8 bg-[#006838] hover:bg-[#017f45] text-white rounded-none [font-family:'Inder',Helvetica] text-[16px]"
            >
              Explore Arknetic Collections
            </Button>
          </div>
        </div>
      </section>

      <OfficeWearProductListSection />

      {/* //offer-section// */}

      <section className="z-[8] w-full mt-[106px] flex flex-wrap justify-center items-center gap-2 bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] py-[17.5px] px-4">
        <div className="h-[72px] w-52 flex items-center justify-center bg-white overflow-hidden">
          <div className="h-[75px] w-[130px] [font-family:'Italiana',Helvetica] font-normal text-black text-[64px] tracking-[0] leading-[normal] whitespace-nowrap flex items-center justify-center">
            Offer
          </div>
        </div>

        <div className="flex h-[70px] w-[325px] relative flex-col items-start gap-2">
          <div className="relative self-stretch w-full h-[31px] bg-white flex items-center justify-center">
            <div className="[font-family:'Italiana',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
              Limited Time !
            </div>
          </div>

          <div className="relative self-stretch w-full h-[31px] bg-white flex items-center justify-center">
            <div className="[font-family:'Italiana',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
              FREE Pouch on order First Above 999/-
            </div>
          </div>
        </div>

        <div className="h-[72px] w-[168px] bg-white" />

        <div className="h-[72px] w-[168px] bg-white" />
      </section>

      <QuickCollectionsSection />
      <OfficeWearModelsSection />
      <NewArrivalsInfoSection />
      <PromotionalVideosSection />
      <NewArrivalsGallerySection />
      <FeaturedModelsSection />
      <FooterSection />
    </div>
  );
};
