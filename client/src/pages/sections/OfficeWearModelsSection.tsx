import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    image: "/figmaAssets/frame-24-5.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d1d1d1", "#808080", "#383838"],
    hasDiscount: false,
  },
  {
    id: 2,
    image: "/figmaAssets/frame-24-3.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d1d1d1", "#808080", "#383838"],
    hasDiscount: true,
    discountPercent: "40%",
  },
  {
    id: 3,
    image: "/figmaAssets/frame-21-3.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d1d1d1", "#808080", "#383838"],
    hasDiscount: true,
    discountPercent: "40%",
  },
  {
    id: 4,
    image: "/figmaAssets/frame-22-3.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d1d1d1", "#808080", "#383838"],
    hasDiscount: true,
    discountPercent: "40%",
  },
  {
    id: 5,
    image: "/figmaAssets/frame-24-5.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d1d1d1", "#808080", "#383838"],
    hasDiscount: false,
  },
  {
    id: 6,
    image: "/figmaAssets/frame-24-3.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d1d1d1", "#808080", "#383838"],
    hasDiscount: true,
    discountPercent: "40%",
  },
  {
    id: 7,
    image: "/figmaAssets/frame-21-3.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d1d1d1", "#808080", "#383838"],
    hasDiscount: true,
    discountPercent: "40%",
  },
  {
    id: 8,
    image: "/figmaAssets/frame-22-3.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: ["#d1d1d1", "#808080", "#383838"],
    hasDiscount: true,
    discountPercent: "40%",
  },
];

export const OfficeWearModelsSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1381px] mx-auto py-8 px-4">
      <div className="w-full max-w-[1381px] mx-auto">
        <header className="flex items-start justify-between mb-[9px]">
          <div className="flex flex-col gap-[ 9px ]">
            <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-black text-base">
              Designer Wear
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base">
              Explore our newest Office . Wear Collection
            </p>
          </div>

          <Button className="h-auto px-4 py-2 bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] hover:opacity-90 [font-family:'Inder',Helvetica] font-normal text-white text-base">
            View All
          </Button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">
          {products.map((product) => (
            <Card
              key={product.id}
              className="border-0 shadow-none bg-transparent"
            >
              <CardContent className="p-0">
                <div className="relative w-full h-[482px] mb-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {product.hasDiscount && (
                    <Badge className="absolute top-2.5 left-2.5 h-6 px-2 bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] hover:opacity-90 [font-family:'Inder',Helvetica] font-normal text-white text-base">
                      {product.discountPercent}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="px-2">
                    <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-base mb-2">
                      {product.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0">
                        <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base">
                          {product.currentPrice}
                        </span>
                        <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base line-through ml-2">
                          {product.originalPrice}
                        </span>
                      </div>

                      <button
                        className="w-[25px] h-[25px] flex items-center justify-center"
                        aria-label="Add to favorites"
                      >
                        <img
                          src="/figmaAssets/frame-29.svg"
                          alt="Favorite"
                          className="w-full h-full"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-2">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className="w-[25px] h-[25px] rounded-full border-0 cursor-pointer hover:opacity-80 transition-opacity"
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
