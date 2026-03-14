import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";
import { NewArrivalsGallerySection } from "./sections/NewArrivalsGallerySection";

const productImages = [
  { src: "/Assets/product_detail_main.png", alt: "Mul Cotton Saree front view" },
  { src: "/Assets/product_detail_side1.png", alt: "Mul Cotton Saree side view" },
  { src: "/Assets/product_detail_side2.png", alt: "Mul Cotton Saree back view" },
  { src: "/Assets/product_detail_main.png", alt: "Mul Cotton Saree detail view" },
];

const sizeSelections = [
  {
    label: "SAREE  MUL COTTON | SALTY GREEN (Size)",
    tags: ["S", "M", "L", "XL"],
  },
  {
    label: "SAREE BUTTOM MUL COTTON | SALTY GREEN (Size)",
    tags: ["S", "M", "L", "XL"],
  },
];

const relatedProducts = [
  {
    image: "/figmaAssets/frame-19-3.png",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: null,
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-20-3.png",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-21-3.png",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-22-3.png",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-19-3.png",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: null,
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-20-3.png",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-21-3.png",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-22-3.png",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
];

const greenGradient =
  "linear-gradient(90deg, rgb(0, 104, 56) 0%, rgb(1, 127, 69) 23.558%, rgb(0, 136, 73) 50%, rgb(1, 127, 69) 75%, rgb(0, 104, 56) 100%)";

export const ProductDetailsPageUi = (): JSX.Element => {
  const [selectedTags, setSelectedTags] = useState<Record<string, string>>({});
  const [accordionOpen, setAccordionOpen] = useState<Record<number, boolean>>({});
  const [isFabricSidebarOpen, setIsFabricSidebarOpen] = useState(false);

  const toggleTag = (group: string, tag: string) => {
    setSelectedTags((prev) => ({
      ...prev,
      [group]: prev[group] === tag ? "" : tag,
    }));
  };

  const toggleAccordion = (index: number) => {
    setAccordionOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleFabricRowClick = (index: number) => {
    toggleAccordion(index);
    setIsFabricSidebarOpen(true);
  };

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden flex flex-col">
      <HeaderSection />

      {/* Product Section */}
      <section className="w-full mb-[30px] max-w-[1440px] mt-[80px] flex h-[824px] overflow-hidden">
        {/* Product Images - 2x2 grid */}
        <div className="w-[998px]  shrink-0 h-[824px] overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex flex-col gap-[8px]">
            {/* Row 1 */}
            <div className="flex items-center justify-between w-full">
              <div className="w-[495px] h-[660px] shrink-0">
                <img
                  src={productImages[0].src}
                  alt={productImages[0].alt}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[495px] h-[660px] shrink-0 overflow-hidden">
                <img
                  src={productImages[1].src}
                  alt={productImages[1].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex items-center justify-between w-full">
              <div className="w-[495px] h-[660px] shrink-0">
                <img
                  src={productImages[2].src}
                  alt={productImages[2].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[495px] h-[660px] shrink-0">
                <img
                  src={productImages[3].src}
                  alt={productImages[3].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Panel */}
        <div className="w-[442px] shrink-0 flex flex-col gap-[24px] px-[20px] items-end">
          {/* Title & Price */}
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start w-full pb-[24px] [font-family:'Poppins',Helvetica] text-black">
              <p className="text-[20px] leading-[30px] font-normal w-full">
                Mul Cotton Saree - Feel good Comfortable Daily weare
              </p>
              <p className="text-[18px] leading-[25px] font-normal w-full">
                Rs. 16,800.00
              </p>
            </div>

            {/* Low Stock & Description */}
            <div className="flex flex-col items-start w-full pb-[24px]">
              <div className="flex gap-[5px] items-center">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="5" cy="5" r="5" fill="#65FF5A" />
                </svg>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-[14px] leading-[20px] text-black">
                  Low stock
                </p>
              </div>
              <p className="[font-family:'Poppins',Helvetica] font-light text-[14px] leading-[20px] text-black w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>

            {/* Size Guide */}
            <div className="flex flex-col items-start w-full">
              <div className="flex gap-[5px] items-center pb-[24px]">
                <div className="w-[24px] h-[14px] bg-black shrink-0" />
                <p className="[font-family:'Poppins',Helvetica] font-medium text-[14px] leading-[20px] text-black underline">
                  Size Guide
                </p>
              </div>

              {/* Size Selections */}
              <div className="flex flex-col gap-px items-start w-full">
                <div className="flex flex-col items-start w-[392px]">
                  {sizeSelections.map((group) => (
                    <div
                      key={group.label}
                      className="flex flex-col gap-[8px] items-start pb-[24px] w-[328px]"
                    >
                      <p className="[font-family:'Poppins',Helvetica] font-normal text-[16px] leading-[20px] text-black w-[328px] whitespace-pre-wrap">
                        {group.label}
                      </p>
                      <div className="flex gap-[8px] items-center">
                        {group.tags.map((tag) => (
                          <button
                            key={`${group.label}-${tag}`}
                            type="button"
                            onClick={() => toggleTag(group.label, tag)}
                            aria-label={`Select size ${tag}`}
                            aria-pressed={selectedTags[group.label] === tag}
                            className={`w-[52.16px] h-[31.6px] shrink-0 flex items-center justify-center text-[11px] [font-family:'Poppins',Helvetica] font-medium transition-colors ${
                              selectedTags[group.label] === tag
                                ? "bg-[#333] text-white"
                                : "bg-black text-white hover:bg-[#333]"
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col items-end w-full">
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <button
                      type="button"
                      className="w-full h-[47px] bg-[#65ff5a] hover:bg-[#52e547] transition-colors flex items-center justify-center"
                    >
                      <span className="[font-family:'Poppins',Helvetica] font-semibold text-[15px] leading-[20px] text-black text-center">
                        ADD TO CART
                      </span>
                    </button>
                    <button
                      type="button"
                      className="w-full h-[47px] bg-[#65ff5a] hover:bg-[#52e547] transition-colors flex items-center justify-center"
                    >
                      <span className="[font-family:'Poppins',Helvetica] font-semibold text-[15px] leading-[20px] text-black text-center">
                        BUY NOW
                      </span>
                    </button>
                  </div>
                  <p className="[font-family:'Poppins',Helvetica] font-light text-[12px] leading-[20px] text-black text-center underline w-full">
                    More payment Options
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="flex flex-col items-end w-full">
            {[0, 1].map((index) => (
              <div key={index} className="w-full">
                <button
                  type="button"
                  onClick={() => handleFabricRowClick(index)}
                  className="flex items-center justify-between py-[16px] w-full"
                  aria-expanded={accordionOpen[index] ?? false}
                >
                  <p className="[font-family:'Poppins',Helvetica] font-light text-[14px] leading-[20px] text-[#171616] underline">
                    About To Know Fabric
                  </p>
                  {/* icon */}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform ${accordionOpen[index] ? "rotate-45" : ""}`}
                  >
                    <path
                      d="M7.5 0L9.18 5.82L15 7.5L9.18 9.18L7.5 15L5.82 9.18L0 7.5L5.82 5.82L7.5 0Z"
                      fill="#171616"
                    />
                  </svg>
                </button>
                {index === 0 && (
                  <div className="w-full h-0 border-t border-black/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office / Formal Section */}
      <NewArrivalsGallerySection />


      {/* Related Products Section */}
      <section className="w-full max-w-[1381px] mx-auto flex flex-col gap-[8px] items-start mt-[36px] mb-[40px]">
        {/* Header */}
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-[8px] items-start w-[447px]">
            <p className="[font-family:'Poppins',Helvetica] font-extrabold text-[16px] leading-normal text-black">
              Related Products
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[16px] leading-normal text-black">
              Explore our newest Office . Wear Collection
            </p>
          </div>
          <div
            className="h-[30px] w-[101px] flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: greenGradient }}
          >
            <p className="[font-family:'Inder',Helvetica] font-normal text-[16px] leading-normal text-white">
              View All
            </p>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="flex flex-col gap-[30px] items-start w-full">
          {/* Row 1 */}
          <div className="flex gap-[15px] items-center w-full">
            {relatedProducts.slice(0, 4).map((product, index) => (
              <div
                key={`row1-${index}`}
                className="flex flex-col items-start w-[333px] shrink-0"
              >
                <div className="h-[482px] w-full relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {product.discount && (
                    <Badge
                      className="absolute top-[10px] left-[10px] h-[24px] w-[48px] flex items-center justify-center border-0 rounded-none text-white [font-family:'Inder',Helvetica] font-normal text-[16px] p-0"
                      style={{ backgroundImage: greenGradient }}
                    >
                      {product.discount}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="flex flex-col items-start pl-[8px] py-[8px] w-full">
                    <div className="h-[30px] w-full overflow-hidden">
                      <p className="[font-family:'Poppins',Helvetica] font-medium text-[16px] leading-normal text-black whitespace-nowrap">
                        {product.title}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <span className="[font-family:'Poppins',Helvetica] font-light text-[16px] leading-normal text-black w-[81px]">
                          {product.price}
                        </span>
                        <span className="[font-family:'Poppins',Helvetica] font-light text-[16px] leading-normal text-black line-through w-[81px]">
                          {product.originalPrice}
                        </span>
                      </div>
                      <div
                        className="w-[25px] h-[25px] rounded-full overflow-hidden flex items-center justify-center shrink-0"
                        style={{ backgroundImage: greenGradient }}
                      >
                        <img
                          src="/figmaAssets/frame-29.svg"
                          alt=""
                          className="w-[18px] h-[18px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[10px] items-center px-[8px]">
                    {product.colors.map((color, ci) => (
                      <div
                        key={ci}
                        className="w-[25px] h-[25px] rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex gap-[15px] items-center w-full">
            {relatedProducts.slice(4, 8).map((product, index) => (
              <div
                key={`row2-${index}`}
                className="flex flex-col items-start w-[333px] shrink-0"
              >
                <div className="h-[482px] w-full relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {product.discount && (
                    <Badge
                      className="absolute top-[10px] left-[10px] h-[24px] w-[48px] flex items-center justify-center border-0 rounded-none text-white [font-family:'Inder',Helvetica] font-normal text-[16px] p-0"
                      style={{ backgroundImage: greenGradient }}
                    >
                      {product.discount}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="flex flex-col items-start pl-[8px] py-[8px] w-full">
                    <div className="h-[30px] w-full overflow-hidden">
                      <p className="[font-family:'Poppins',Helvetica] font-medium text-[16px] leading-normal text-black whitespace-nowrap">
                        {product.title}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <span className="[font-family:'Poppins',Helvetica] font-light text-[16px] leading-normal text-black w-[81px]">
                          {product.price}
                        </span>
                        <span className="[font-family:'Poppins',Helvetica] font-light text-[16px] leading-normal text-black line-through w-[81px]">
                          {product.originalPrice}
                        </span>
                      </div>
                      <div
                        className="w-[25px] h-[25px] rounded-full overflow-hidden flex items-center justify-center shrink-0"
                        style={{ backgroundImage: greenGradient }}
                      >
                        <img
                          src="/figmaAssets/frame-29.svg"
                          alt=""
                          className="w-[18px] h-[18px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[10px] items-center px-[8px]">
                    {product.colors.map((color, ci) => (
                      <div
                        key={ci}
                        className="w-[25px] h-[25px] rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />

      {isFabricSidebarOpen && (
        <>
          <button
            type="button"
            aria-label="Close fabric details sidebar"
            onClick={() => setIsFabricSidebarOpen(false)}
            className="fixed top-[80px] left-0 right-0 bottom-0 z-[119] bg-black/30 backdrop-blur-md"
          />

          <aside
            aria-label="About To Know Fabric right sidebar"
            className="fixed top-[80px] right-0 bottom-0 z-[120] w-[390px] h-[calc(100vh-80px)] bg-white overflow-hidden flex flex-col"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#c8c8c8 transparent",
            }}
          >
            {/* Sticky heading */}
            <div className="sticky top-0 z-10 bg-white w-full border-b border-black/10 shrink-0">
              <h3 className="w-[331px] mx-auto px-[14px] py-[14px] [font-family:'Poppins',Helvetica] text-[16px] leading-[30px] font-normal text-black">
                Composition and Care
              </h3>
            </div>

            {/* Scrollable content — narrow scrollbar + right margin */}
            <div
              className="flex-1 overflow-y-auto mr-[10px]"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#c8c8c8 transparent",
              }}
            >
              <style>{`
                .fabric-scroll::-webkit-scrollbar { width: 4px; }
                .fabric-scroll::-webkit-scrollbar-track { background: transparent; margin-right: 10px; }
                .fabric-scroll::-webkit-scrollbar-thumb { background: #c8c8c8; border-radius: 4px; }
              `}</style>
              <div className="fabric-scroll w-full h-full overflow-y-auto">
                <div className="w-[305px] mx-auto pt-[22px] pb-[30px] flex flex-col gap-[16px] items-start">
                  <div className="w-full px-[14px] py-[2px] [font-family:'Poppins',Helvetica] text-[16px] leading-[20px] font-normal text-gray-700 whitespace-pre-line">
                    {`Composition:\n63% POLYAMIDE\n37% Elastane`}
                  </div>

                  <div className="w-full px-[14px] py-[2px] [font-family:'Poppins',Helvetica] text-[15px] leading-[25px] font-normal text-gray-700">
                    Arknetic has chosen the finest European fabrics to ensure your Arknetic garment will last a long time and continue to look refined wear after wear. To preserve the structure, softness, and finish of this piece, please follow the garment label instructions carefully before every wash. Machine wash at temperatures up to 30°C using a gentle cycle with mild detergent. Wash with similar colors and turn the garment inside out to protect the outer surface. Do not bleach and avoid aggressive chemical cleaners. Direct ironing on the fabric is not recommended; if needed, use low heat from the reverse side with a protective pressing cloth. Do not tumble dry. Reshape while damp and dry flat or hang in shade to maintain form and elasticity. Store in a cool, dry space away from direct sunlight and moisture for best longevity. For additional guidance on care, usage, and maintenance, please consult the FAQ section or contact us via email at shop@Arknetic.com.
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
};
