import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    image: "/figmaAssets/frame-24.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d1d1d1", "#808080", "#383838"],
  },
  {
    id: 2,
    image: "/figmaAssets/frame-24-1.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d1d1d1", "#808080", "#383838"],
  },
  {
    id: 3,
    image: "/figmaAssets/frame-24-2.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: null,
    colors: ["#d1d1d1", "#808080", "#383838"],
  },
  {
    id: 4,
    image: "/figmaAssets/frame-24-3.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d1d1d1", "#808080", "#383838"],
  },
  {
    id: 5,
    image: "/figmaAssets/frame-24-4.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: null,
    colors: ["#d1d1d1", "#808080", "#383838"],
  },
  {
    id: 6,
    image: "/figmaAssets/frame-24-5.avif",
    title: "Office Formal | Men Formal Weare",
    currentPrice: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    discount: "40%",
    colors: ["#d1d1d1", "#808080", "#383838"],
  },
];

export const OfficeWearProductListSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-[9px] w-full max-w-[1381px] mx-auto mt-[104px]">
      <header className="flex items-start justify-between w-full">
        <div className="flex flex-col items-start gap-2">
          <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-black text-base tracking-[0] leading-normal">
            Office . Wear
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-normal">
            Explore our newest Office . Wear Collection
          </p>
        </div>
        <Button className="h-[30px] px-4 bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] hover:opacity-90 [font-family:'Inder',Helvetica] font-normal text-white text-base">
          View All
        </Button>
      </header>

      <div className="flex flex-col items-start gap-y-[30px] w-full">
        <div className="grid grid-cols-3 gap-[30px] w-full">
          {products.slice(0, 6).map((product) => (
            <Card
              key={product.id}
              className="flex flex-col items-start border-0 shadow-none "
            >
              <div
                className="relative w-[447px] h-[669px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                {product.discount && (
                  <Badge className="absolute top-2.5 left-2.5 h-6 px-2 bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] hover:opacity-90 [font-family:'Inder',Helvetica] font-normal text-white text-base">
                    {product.discount}
                  </Badge>
                )}
              </div>
              <CardContent className="flex flex-col items-start w-full p-0">
                <div className="flex flex-col items-start pl-2 pr-0 py-2 w-[447px]">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-normal h-[30px] flex items-center">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between w-full">
                    <div className="inline-flex items-center">
                      <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base tracking-[0] leading-normal w-[81px]">
                        {product.currentPrice}
                      </span>
                      <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base tracking-[0] leading-normal line-through w-[81px]">
                        {product.originalPrice}
                      </span>
                    </div>
                    <img
                      className="w-[25px] h-[25px]"
                      alt="Favorite"
                      src="/figmaAssets/frame-29.svg"
                    />
                  </div>
                </div>
                <div className="inline-flex items-center gap-2.5 px-2 py-0">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-[25px] h-[25px] rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${index + 1}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
