import { useState, useRef } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

type DropdownColumn = { heading: string; items: string[] };
type DropdownData = { columns: DropdownColumn[]; bannerLabel: string; bannerImage: string };

const dropdownContent: Record<string, DropdownData> = {
  "New In": {
    columns: [
      { heading: "New This Week", items: ["Dresses", "Tops", "Coats", "Shoes", "Bags", "Accessories"] },
      { heading: "Trending Now", items: ["Midi Dresses", "Blazers", "Loafers", "Tote Bags", "Knitwear", "Scarves"] },
      { heading: "By Style", items: ["Casual", "Workwear", "Evening", "Weekend", "Brunch", "Festival"] },
      { heading: "By Size", items: ["XS / S", "M / L", "XL / XXL", "Petite", "Tall", "Plus Size"] },
    ],
    bannerLabel: "New In",
    bannerImage: "/figmaAssets/frame-22-3.avif",
  },
  "Formal Wear": {
    columns: [
      { heading: "Suits & Sets", items: ["Blazers", "Trousers", "Waistcoats", "Shirts", "Ties", "Pocket Squares"] },
      { heading: "Dresses", items: ["Midi Dresses", "Maxi Dresses", "Wrap Dresses", "Shift Dresses", "Shirt Dresses", "Jumpsuits"] },
      { heading: "Accessories", items: ["Belts", "Shoes", "Handbags", "Scarves", "Jewelry", "Watches"] },
      { heading: "By Color", items: ["Black", "Navy", "Grey", "White", "Cream", "Charcoal"] },
    ],
    bannerLabel: "Formal",
    bannerImage: "/figmaAssets/frame-21-3.avif",
  },
  "Party Wear": {
    columns: [
      { heading: "Dresses", items: ["Mini Dresses", "Bodycon", "Sequin", "Lace", "Slip Dresses", "Two-Piece"] },
      { heading: "Tops & Bottoms", items: ["Crop Tops", "Blouses", "Mini Skirts", "Trousers", "Jumpsuits", "Playsuits"] },
      { heading: "Accessories", items: ["Heels", "Clutches", "Statement Jewelry", "Hair", "Stockings", "Belts"] },
      { heading: "By Occasion", items: ["Wedding Guest", "Cocktail", "Gala", "Birthday", "Graduation", "Night Out"] },
    ],
    bannerLabel: "Party Wear",
    bannerImage: "/figmaAssets/frame-20-3.avif",
  },
  "Sale - 50%": {
    columns: [
      { heading: "Women's Sale", items: ["Dresses", "Tops", "Bottoms", "Outerwear", "Shoes", "Bags"] },
      { heading: "Men's Sale", items: ["Shirts", "Trousers", "Suits", "Footwear", "Accessories", "Knitwear"] },
      { heading: "By Discount", items: ["Up to 20% Off", "Up to 30% Off", "Up to 40% Off", "Up to 50% Off", "Clearance", "Final Sale"] },
      { heading: "Featured", items: ["Best Sellers", "Editor's Picks", "New Markdowns", "Limited Offer", "Bundle Deals", "Gift Sets"] },
    ],
    bannerLabel: "Sale",
    bannerImage: "/figmaAssets/frame-19-3.avif",
  },
  "Women": {
    columns: [
      { heading: "Clothing", items: ["Dresses", "Tops & T-Shirts", "Trousers", "Jeans", "Skirts", "Jumpsuits"] },
      { heading: "Outerwear", items: ["Coats", "Jackets", "Blazers", "Knitwear", "Hoodies", "Raincoats"] },
      { heading: "Shoes & Bags", items: ["Heels", "Boots", "Trainers", "Sandals", "Handbags", "Clutches"] },
      { heading: "Accessories", items: ["Jewelry", "Scarves", "Belts", "Sunglasses", "Hats", "Watches"] },
    ],
    bannerLabel: "Women",
    bannerImage: "/figmaAssets/frame-22-4.avif",
  },
  "Men": {
    columns: [
      { heading: "Clothing", items: ["Shirts", "T-Shirts", "Trousers", "Jeans", "Suits", "Shorts"] },
      { heading: "Outerwear", items: ["Coats", "Jackets", "Blazers", "Hoodies", "Knitwear", "Raincoats"] },
      { heading: "Shoes & Bags", items: ["Dress Shoes", "Trainers", "Boots", "Loafers", "Backpacks", "Wallets"] },
      { heading: "Accessories", items: ["Ties", "Belts", "Watches", "Sunglasses", "Hats", "Socks"] },
    ],
    bannerLabel: "Men",
    bannerImage: "/figmaAssets/frame-21-4.avif",
  },
};

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

export const HeaderSection = (): JSX.Element => {
  const [location, setLocation] = useLocation();
  const isCollectionsBrand = location.startsWith("/collections");
  const [isSmartSwitchOn, setIsSmartSwitchOn] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleBrandSwitch = () => {
    const nextIsCollections = !isCollectionsBrand;
    setIsSmartSwitchOn(nextIsCollections);
    setLocation(nextIsCollections ? "/collections" : "/");
  };

  const handleNavEnter = (label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleNavLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const handleDropdownEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const activeDropdown = openDropdown ? dropdownContent[openDropdown] ?? null : null;

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 z-[100] flex items-center justify-between px-8 bg-white backdrop-blur-[5.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.55px)_brightness(100%)]">
        <div className="flex-1 flex items-center gap-3 justify-start">
          {/* smart switch button */}
          <button
            type="button"
            aria-label={`Switch to ${isCollectionsBrand ? "Arknetic Fashion" : "Arknetic Collections"}`}
            onClick={handleBrandSwitch}
            className="w-[136px] h-[38px] relative flex items-center bg-[#8e8e8e33] rounded-[25px] overflow-hidden border-[none] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[25px] before:[background:linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(102,102,102,1)_57%,rgba(166,166,166,1)_75%,rgba(207,207,207,1)_93%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <span
              className={`absolute inset-y-0 flex items-center font-['Poppins',Helvetica] text-[9px] leading-[1] tracking-tight text-[#1f1f1f] z-[5] pointer-events-none whitespace-nowrap ${
                (isCollectionsBrand || isSmartSwitchOn)
                  ? "left-[8px] right-[42px] justify-start"
                  : "left-[42px] right-[19px] justify-end"
              }`}
            >
              {isCollectionsBrand ? "Arknetic Collections" : "Arknetic Fashion"}
            </span>
            <div className={`w-[34px] h-[34px] absolute left-[2px] rounded-full overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 ${(isCollectionsBrand || isSmartSwitchOn) ? "translate-x-[98px]" : "translate-x-0"}`}>
              <img
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${(isCollectionsBrand || isSmartSwitchOn) ? "opacity-0" : "opacity-100"}`}
                alt="Logo"
                src="/figmaAssets/logo.avif"
              />
              <img
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${(isCollectionsBrand || isSmartSwitchOn) ? "opacity-100" : "opacity-0"}`}
                alt="Arknetic Fashion"
                src="/Assets/ArkneticFashion.avif"
              />
            </div>
          </button>
        </div>

        <nav className="flex-shrink-0 flex items-center gap-12">
          <div className="flex items-center gap-[31px]">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                type="button"
                onClick={() => setLocation("/")}
                onMouseEnter={() => handleNavEnter(item.label)}
                onMouseLeave={handleNavLeave}
                className="inline-flex items-center gap-2 h-auto p-0 hover:bg-transparent"
              >
                <span className="[font-family:'Poppins',Helvetica] font-normal text-xl text-center leading-[25px] whitespace-nowrap text-black tracking-[0]">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                )}
              </Button>
            ))}
          </div>

          <button
            type="button"
            aria-label="Go to home"
            onClick={() => setLocation("/")}
            className="p-0 bg-transparent border-none cursor-pointer"
          >
            <img
              className="w-16 h-20 object-cover"
              alt="Logo"
              src="/figmaAssets/logo.avif"
            />
          </button>

          <div className="flex items-center gap-[31px]">
            {rightNavigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                type="button"
                onClick={() => {
                  if (item.label === "Women" || item.label === "Men") {
                    setLocation("/collections");
                    return;
                  }
                  setLocation("/");
                }}
                onMouseEnter={() => handleNavEnter(item.label)}
                onMouseLeave={handleNavLeave}
                className="inline-flex items-center gap-2 h-auto p-0 hover:bg-transparent"
              >
                <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl text-center leading-[25px] tracking-[0] whitespace-nowrap">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                )}
              </Button>
            ))}
          </div>
        </nav>

        <div className="flex-1 flex justify-end">
          <img
            className="w-[145px] h-[50px] object-contain"
            alt="Nav search cart"
            src="/figmaAssets/nav-search-cart-profile-items.svg"
          />
        </div>
      </header>

      {/* Dropdown Panel */}
      {activeDropdown && (
        <div
          className="fixed top-[80px] left-0 w-full z-[99] h-[430px] bg-white/90 backdrop-blur-[43px] overflow-hidden shadow-lg"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="flex gap-[157px] items-start pl-[91px] pt-[37px]">
            {/* Nav-Child Items — 4 columns */}
            <div className="bg-white h-[336px] w-[559px] flex-shrink-0 overflow-hidden relative">
              <div className="absolute left-[29px] top-[48px] flex gap-[10px] items-start">
                {activeDropdown.columns.map((col, ci) => (
                  <div key={ci} className="flex flex-col gap-[5px] items-start w-[120px] flex-shrink-0">
                    {/* Column heading */}
                    <div className="bg-[#8f8f8f] h-[30px] w-full flex items-center px-2">
                      <span className="text-white text-[11px] font-semibold font-['Poppins',sans-serif] truncate leading-tight">
                        {col.heading}
                      </span>
                    </div>
                    {/* Column items */}
                    {col.items.map((item, ii) => (
                      <div
                        key={ii}
                        className="bg-[#c8c7c7] hover:bg-[#adadad] h-[30px] w-full flex items-center px-2 cursor-pointer transition-colors duration-150"
                      >
                        <span className="text-[#333] text-[11px] font-['Poppins',sans-serif] truncate leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Nav-item banner */}
            <div className="h-[336px] w-[546px] flex-shrink-0 relative overflow-hidden">
              <img
                alt={activeDropdown.bannerLabel}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={activeDropdown.bannerImage}
              />
              {/* Category label band */}
              <div className="absolute left-1/2 -translate-x-1/2 bg-white h-[70px] w-[269px] overflow-hidden top-[245px] flex items-center justify-center">
                <span className="[font-family:'Italiana',serif] text-[#006838] text-[32px] whitespace-nowrap">
                  {activeDropdown.bannerLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
