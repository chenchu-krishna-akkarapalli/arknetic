import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedModelsSection } from "./sections/FeaturedModelsSection";
import { NewArrivalsGallerySection } from "./sections/NewArrivalsGallerySection";
import { NewArrivalsInfoSection } from "./sections/NewArrivalsInfoSection";
import { OfficeWearModelsSection } from "./sections/OfficeWearModelsSection";
import { OfficeWearProductListSection } from "./sections/OfficeWearProductListSection";
import { PromotionalVideosSection } from "./sections/PromotionalVideosSection";
import { QuickCollectionsSection } from "./sections/QuickCollectionsSection";

const navigationItems = [
  { label: "New In", hasDropdown: true },
  { label: "Formal Wear", hasDropdown: true },
  { label: "Party Wear", hasDropdown: true },
];

const rightNavigationItems = [
  { label: "Sale - 50%", hasDropdown: true },
  { label: "Women", hasDropdown: true },
  { label: "Men", hasDropdown: true },
];

const categoryCards = [
  {
    image: "/figmaAssets/frame-19-3.png",
    alt: "Frame",
    className: "w-[377.8px] h-[504.4px] mb-[-22.40px] ml-[-22.40px]",
  },
  {
    image: "/figmaAssets/frame-20-3.png",
    alt: "Frame",
    className: "w-[331px] h-[482px]",
  },
  {
    image: "/figmaAssets/frame-21-4.png",
    alt: "Frame",
    className: "w-[330px] h-[482px]",
  },
  {
    image: "/figmaAssets/frame-22-4.png",
    alt: "Frame",
    className: "w-[331px] h-[482px]",
  },
];

export const HomePageUi = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1440px] flex flex-col relative">
      <header className="fixed top-0 left-0 w-[1440px] h-20 z-[12] flex bg-white backdrop-blur-[5.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.55px)_brightness(100%)]">
        <div className="mt-[21px] w-[136px] h-[38px] relative ml-[31px] flex bg-[#8e8e8e33] rounded-[25px] overflow-hidden border-[none] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[25px] before:[background:linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(102,102,102,1)_57%,rgba(166,166,166,1)_75%,rgba(207,207,207,1)_93%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <img
            className="mt-0.5 w-[34px] h-[34px] ml-0.5 rounded-[20px] object-cover"
            alt="Rectangle"
            src="/figmaAssets/rectangle-1.png"
          />
        </div>

        <nav className="flex w-[942px] h-20 relative ml-[27px] items-center gap-[30px]">
          <div className="inline-flex items-center gap-[31px] relative flex-[0_0_auto]">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="inline-flex items-center gap-2 h-auto p-0 hover:bg-transparent"
              >
                <span className="[font-family:'Poppins',Helvetica] font-normal text-xl text-center leading-[25px] whitespace-nowrap text-black tracking-[0]">
                  {item.label}
                </span>
                {item.hasDropdown && <ChevronDownIcon className="w-5 h-5" />}
              </Button>
            ))}
          </div>

          <img
            className="relative w-16 h-20 object-cover"
            alt="Logo"
            src="/figmaAssets/logo.png"
          />

          <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto] mr-[-6.00px]">
            {rightNavigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="inline-flex items-center gap-2 h-auto p-0 hover:bg-transparent"
              >
                <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl text-center leading-[25px] tracking-[0] whitespace-nowrap">
                  {item.label}
                </span>
                {item.hasDropdown && <ChevronDownIcon className="w-5 h-5" />}
              </Button>
            ))}
          </div>
        </nav>

        <img
          className="mt-[13px] w-[145px] h-[50px] relative ml-[99px]"
          alt="Nav search cart"
          src="/figmaAssets/nav-search-cart-profile-items.svg"
        />
      </header>

      <section className="z-[11] w-[1440px] h-[837px] mt-20 flex relative">
        <img
          className="mt-[439px] w-[683px] h-[300px] ml-[37px]"
          alt="Frame"
          src="/figmaAssets/frame-18-1.png"
        />
      </section>

      <section className="inline-flex z-10 ml-[30px] w-[1380px] relative mt-[45px] items-center gap-[19px]">
        {categoryCards.map((card, index) => (
          <img
            key={index}
            className={`relative ${card.className} object-cover`}
            alt={card.alt}
            src={card.image}
          />
        ))}
      </section>

      <OfficeWearProductListSection />

      <section className="z-[8] w-full mt-[106px] flex items-center gap-2 bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] py-[17.5px]">
        <div className="h-[72px] w-52 ml-[313px] flex items-center justify-center bg-white overflow-hidden">
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

      <footer className="z-[1] w-full mt-[99px] bg-[#d2d2d2] py-[100px]">
        <div className="container mx-auto px-4"></div>
      </footer>
    </div>
  );
};
