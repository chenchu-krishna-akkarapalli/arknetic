import { useState } from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

const greenGradient =
  "linear-gradient(90deg, rgb(0, 104, 56) 0%, rgb(1, 127, 69) 23.558%, rgb(0, 136, 73) 50%, rgb(1, 127, 69) 75%, rgb(0, 104, 56) 100%)";

interface Product {
  image: string;
  title: string;
  price: string;
  originalPrice: string;
  discount?: string;
  colors: string[];
}

const products: Product[] = [
  {
    image: "/figmaAssets/frame-19-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-20-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-21-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-22-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-19-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-20-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-21-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-22-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-19-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-20-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-21-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-22-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-19-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-20-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-21-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
  {
    image: "/figmaAssets/frame-22-3.avif",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d2d2d2", "#808080", "#393939"],
  },
];

function ProductCard({
  product,
  isLast,
}: {
  product: Product;
  isLast: boolean;
}) {
  return (
    <div
      className="flex flex-col items-start shrink-0"
      style={{ width: isLast ? 336 : 333 }}
    >
      {/* Image */}
      <div className="h-[482px] w-full relative shrink-0">
        <img
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
          src={product.image}
        />
        {product.discount && (
          <div
            className="absolute top-[10px] left-[10px] h-[24px] w-[48px] overflow-hidden flex items-center justify-center"
            style={{ backgroundImage: greenGradient }}
          >
            <span className="font-['Inder',sans-serif] text-[16px] text-white leading-normal">
              {product.discount}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start pl-[8px] py-[8px] w-full">
          {/* Title */}
          <div className="h-[30px] overflow-hidden w-full relative">
            <p className="absolute left-0 top-[calc(50%-12px)] font-['Poppins',sans-serif] font-medium text-[16px] text-black whitespace-nowrap leading-normal">
              {product.title}
            </p>
          </div>

          {/* Price + cart */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="h-[25px] overflow-hidden w-[81px]">
                <p className="font-['Poppins',sans-serif] font-light text-[16px] text-black whitespace-nowrap leading-normal">
                  {product.price}
                </p>
              </div>
              <div className="h-[25px] overflow-hidden w-[81px]">
                <p className="font-['Poppins',sans-serif] font-light text-[16px] text-black whitespace-nowrap leading-normal line-through">
                  {product.originalPrice}
                </p>
              </div>
            </div>

            {/* Cart icon */}
            <div
              className="w-[25px] h-[25px] rounded-full overflow-hidden flex items-center justify-center shrink-0"
              style={{ backgroundImage: greenGradient }}
            >
              <img
                src="/figmaAssets/frame-29.svg"
                alt="Cart"
                className="w-[18px] h-[18px]"
              />
            </div>
          </div>
        </div>

        {/* Color swatches */}
        <div className="flex items-center gap-[10px] px-[8px] w-[110px]">
          {product.colors.map((color, i) => (
            <div
              key={i}
              className="w-[25px] h-[25px] rounded-full shrink-0"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const CollectionsPageUi = (): JSX.Element => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Featured");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const sortOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Newest Arrivals",
    "Best Sellers",
    "Trending",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const colorOptions = [
    { label: "Light Gray", value: "#d2d2d2" },
    { label: "Gray", value: "#808080" },
    { label: "Charcoal", value: "#393939" },
    { label: "Black", value: "#1a1a1a" },
    { label: "Off White", value: "#f0ede8" },
    { label: "Forest Green", value: "#006838" },
    { label: "Navy Blue", value: "#1a2c50" },
    { label: "Sand Beige", value: "#d4bc9a" },
  ];

  const categoryOptions = [
    "Designer Wear",
    "Office Formal",
    "Casual Wear",
    "Ethnic Wear",
    "Party Wear",
    "Sports Wear",
  ];

  const toggleSize = (size: string) =>
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );

  const toggleColor = (color: string) =>
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );

  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const clearAllFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedCategories([]);
  };

  const activeFilterCount =
    selectedSizes.length + selectedColors.length + selectedCategories.length;

  // Split products into rows of 4
  const rows: Product[][] = [];
  for (let i = 0; i < products.length; i += 4) {
    rows.push(products.slice(i, i + 4));
  }

  return (
    <div className="bg-white min-h-screen w-full relative pt-[180px]">
      {/* Header */}
      <HeaderSection />

      {/* Toolbar bar - 100px height, at top 80px */}
      <div className="fixed top-[80px] left-0 right-0 h-[100px] bg-white border-b border-black z-[90]">
        <div className="h-full max-w-[1381px] w-full mx-auto relative">
          {/* Breadcrumb */}
          <p className="absolute top-[25px] left-0 font-['Poppins',sans-serif] font-normal text-[14px] text-black text-center leading-[25px] whitespace-nowrap">
            Home / Arknetic Collection / Designer Wear
          </p>

          {/* Filter + Sort */}
          <div className="absolute left-0 top-[67px] flex items-center gap-[29px]">
            {/* Filter */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-[10px] shrink-0 hover:opacity-70 transition-opacity cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="shrink-0"
              >
                <path d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <span className="font-['Poppins',sans-serif] font-normal text-[14px] text-black text-center leading-[25px] whitespace-nowrap">
                Filter
              </span>
              {activeFilterCount > 0 && (
                <span
                  className="flex items-center justify-center w-[18px] h-[18px] rounded-full text-white font-['Poppins',sans-serif] text-[10px] shrink-0"
                  style={{ backgroundImage: greenGradient }}
                >
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setIsSortOpen((prev) => !prev)}
                className="flex items-center gap-[10px] shrink-0 hover:opacity-70 transition-opacity cursor-pointer"
              >
                <span className="font-['Poppins',sans-serif] font-normal text-[14px] text-black text-center leading-[25px] whitespace-nowrap">
                  Sort
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`shrink-0 transition-transform duration-200 ${
                    isSortOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                </svg>
              </button>

              {/* Sort dropdown panel */}
              {isSortOpen && (
                <>
                  <div
                    className="fixed inset-0 z-[89]"
                    onClick={() => setIsSortOpen(false)}
                  />
                  <div className="absolute top-[calc(100%+10px)] left-0 w-[220px] bg-white border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.10)] z-[95]">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        className={`w-full text-left px-[16px] py-[11px] font-['Poppins',sans-serif] text-[14px] flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-black/5 last:border-0 ${
                          selectedSort === option
                            ? "text-[#006838] font-medium"
                            : "text-black font-normal"
                        }`}
                        onClick={() => {
                          setSelectedSort(option);
                          setIsSortOpen(false);
                        }}
                      >
                        <span>{option}</span>
                        {selectedSort === option && (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="shrink-0 text-[#006838]"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Product count - centered */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[70px] flex items-center gap-[5px] px-[100px] font-['Poppins',sans-serif] font-normal text-[14px] text-black text-center leading-[25px] whitespace-nowrap">
            <span>154 </span>
            <span>Products</span>
          </div>

          {/* Grid view toggles */}
          <div className="absolute right-0 top-[72.5px] flex items-center gap-[11px]">
            {/* Single grid icon */}
            <div className="w-[20px] h-[20px] border border-[#676767] shrink-0" />
            {/* 2x2 grid icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="shrink-0"
            >
              <rect
                x="0.5"
                y="0.5"
                width="8"
                height="8"
                stroke="#676767"
              />
              <rect
                x="11.5"
                y="0.5"
                width="8"
                height="8"
                stroke="#676767"
              />
              <rect
                x="0.5"
                y="11.5"
                width="8"
                height="8"
                stroke="#676767"
              />
              <rect
                x="11.5"
                y="11.5"
                width="8"
                height="8"
                stroke="#676767"
              />
            </svg>
            {/* 4-grid icon */}
            <div className="relative w-[20px] h-[20px] shrink-0">
              <div className="absolute inset-0 border border-[#676767]" />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="absolute inset-0"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="4"
                  height="4"
                  stroke="#676767"
                />
                <rect
                  x="7.5"
                  y="0.5"
                  width="5"
                  height="4"
                  stroke="#676767"
                />
                <rect
                  x="15.5"
                  y="0.5"
                  width="4"
                  height="4"
                  stroke="#676767"
                />
                <rect
                  x="0.5"
                  y="7.5"
                  width="4"
                  height="5"
                  stroke="#676767"
                />
                <rect
                  x="7.5"
                  y="7.5"
                  width="5"
                  height="5"
                  stroke="#676767"
                />
                <rect
                  x="15.5"
                  y="7.5"
                  width="4"
                  height="5"
                  stroke="#676767"
                />
                <rect
                  x="0.5"
                  y="15.5"
                  width="4"
                  height="4"
                  stroke="#676767"
                />
                <rect
                  x="7.5"
                  y="15.5"
                  width="5"
                  height="4"
                  stroke="#676767"
                />
                <rect
                  x="15.5"
                  y="15.5"
                  width="4"
                  height="4"
                  stroke="#676767"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full flex flex-col gap-[8px] py-[15px]">
        <div className="max-w-[1381px] w-full mx-auto flex flex-col gap-[8px]">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col gap-[30px] w-full">
              <div className="flex gap-[15px] items-center w-full">
                {row.map((product, colIndex) => (
                  <ProductCard
                    key={colIndex}
                    product={product}
                    isLast={colIndex === 3}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <FooterSection />

      {/* Filter Sidebar */}
      {isFilterOpen && (
        <>
          {/* Overlay */}
          <button
            className="fixed top-[80px] left-0 right-0 bottom-0 z-[119] bg-black/30 backdrop-blur-md"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Sidebar Panel */}
          <aside className="fixed top-[80px] left-0 bottom-0 z-[120] w-[340px] bg-white flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.08)]">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-black/10 shrink-0">
              <div className="w-[295px] mx-auto flex items-center justify-between py-[16px]">
                <h3 className="font-['Poppins',sans-serif] font-medium text-[16px] text-black">
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-[8px] font-['Poppins',sans-serif] font-normal text-[13px] text-[#006838]">
                      ({activeFilterCount} selected)
                    </span>
                  )}
                </h3>
                <div className="flex items-center gap-[14px]">
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="font-['Poppins',sans-serif] text-[13px] text-[#006838] underline underline-offset-2"
                    >
                      Clear All
                    </button>
                  )}
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex items-center justify-center w-[24px] h-[24px] hover:opacity-60 transition-opacity"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable Body */}
            <div
              className="flex-1 overflow-y-auto"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#c8c8c8 transparent" }}
            >
              <style>{`
                .filter-scroll::-webkit-scrollbar { width: 4px; }
                .filter-scroll::-webkit-scrollbar-track { background: transparent; }
                .filter-scroll::-webkit-scrollbar-thumb { background: #c8c8c8; border-radius: 4px; }
              `}</style>
              <div className="filter-scroll w-full h-full overflow-y-auto">
                <div className="w-[295px] mx-auto flex flex-col">

                  {/* Category Section */}
                  <div className="py-[20px] border-b border-black/10">
                    <h4 className="font-['Poppins',sans-serif] font-medium text-[13px] text-black mb-[14px] uppercase tracking-[0.09em]">
                      Category
                    </h4>
                    <div className="flex flex-col gap-[10px]">
                      {categoryOptions.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => toggleCategory(cat)}
                          className="flex items-center gap-[10px] w-full text-left hover:opacity-75 transition-opacity"
                        >
                          <div
                            className={`w-[16px] h-[16px] border flex items-center justify-center shrink-0 transition-colors ${
                              selectedCategories.includes(cat)
                                ? "border-[#006838] bg-[#006838]"
                                : "border-black/30 bg-white"
                            }`}
                          >
                            {selectedCategories.includes(cat) && (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            )}
                          </div>
                          <span
                            className={`font-['Poppins',sans-serif] text-[14px] ${
                              selectedCategories.includes(cat)
                                ? "text-[#006838] font-medium"
                                : "text-black font-normal"
                            }`}
                          >
                            {cat}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size Section */}
                  <div className="py-[20px] border-b border-black/10">
                    <h4 className="font-['Poppins',sans-serif] font-medium text-[13px] text-black mb-[14px] uppercase tracking-[0.09em]">
                      Size
                    </h4>
                    <div className="flex flex-wrap gap-[8px]">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`w-[52px] h-[36px] border font-['Poppins',sans-serif] text-[13px] transition-colors ${
                            selectedSizes.includes(size)
                              ? "border-[#006838] text-[#006838] font-medium bg-[rgba(0,104,56,0.05)]"
                              : "border-black/20 text-black font-normal hover:border-black/50"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Section */}
                  <div className="py-[20px] border-b border-black/10">
                    <h4 className="font-['Poppins',sans-serif] font-medium text-[13px] text-black mb-[14px] uppercase tracking-[0.09em]">
                      Color
                    </h4>
                    <div className="flex flex-wrap gap-[12px]">
                      {colorOptions.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => toggleColor(color.value)}
                          title={color.label}
                          className={`relative w-[30px] h-[30px] rounded-full shrink-0 transition-transform hover:scale-110 ${
                            selectedColors.includes(color.value)
                              ? "ring-2 ring-offset-2 ring-[#006838]"
                              : ""
                          }`}
                          style={{
                            backgroundColor: color.value,
                            border:
                              color.value === "#f0ede8"
                                ? "1px solid #d0cdc8"
                                : "none",
                          }}
                        >
                          {selectedColors.includes(color.value) && (
                            <span className="absolute inset-0 flex items-center justify-center">
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill={color.value === "#f0ede8" ? "#006838" : "white"}
                              >
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                    {selectedColors.length > 0 && (
                      <p className="mt-[10px] font-['Poppins',sans-serif] text-[12px] text-black/50 leading-[18px]">
                        {colorOptions
                          .filter((c) => selectedColors.includes(c.value))
                          .map((c) => c.label)
                          .join(", ")}
                      </p>
                    )}
                  </div>

                  {/* Price Range Section */}
                  <div className="py-[20px]">
                    <h4 className="font-['Poppins',sans-serif] font-medium text-[13px] text-black mb-[14px] uppercase tracking-[0.09em]">
                      Price Range
                    </h4>
                    <div className="flex flex-col gap-[14px]">
                      <div className="flex items-center gap-[10px]">
                        <div className="flex-1 border border-black/20 px-[10px] py-[8px]">
                          <p className="font-['Poppins',sans-serif] text-[11px] text-black/40 mb-[2px]">
                            MIN
                          </p>
                          <p className="font-['Poppins',sans-serif] text-[13px] text-black">
                            Rs. 0
                          </p>
                        </div>
                        <div className="w-[14px] h-[1px] bg-black/20 shrink-0" />
                        <div className="flex-1 border border-black/20 px-[10px] py-[8px]">
                          <p className="font-['Poppins',sans-serif] text-[11px] text-black/40 mb-[2px]">
                            MAX
                          </p>
                          <p className="font-['Poppins',sans-serif] text-[13px] text-black">
                            Rs. 50,000
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-[3px] bg-black/10 relative rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full w-full rounded-full"
                          style={{ backgroundImage: greenGradient }}
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="shrink-0 border-t border-black/10 p-[20px]">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full h-[46px] text-white font-['Poppins',sans-serif] font-medium text-[14px] transition-opacity hover:opacity-90"
                style={{ backgroundImage: greenGradient }}
              >
                Apply Filters
                {activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
};
