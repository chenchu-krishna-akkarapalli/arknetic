import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const productColors = [
  { bg: "bg-[#d1d1d1]" },
  { bg: "bg-[#808080]" },
  { bg: "bg-[#383838]" },
];

const topRowProducts = [
  {
    image: "/figmaAssets/frame-21-3.png",
    discount: "40%",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: productColors,
  },
  {
    image: "/figmaAssets/frame-22-3.png",
    discount: "40%",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: productColors,
  },
];

const bottomRowProducts = [
  {
    image: "/figmaAssets/frame-24-5.png",
    discount: null,
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: productColors,
  },
  {
    image: "/figmaAssets/frame-24-3.png",
    discount: "40%",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: productColors,
  },
  {
    image: "/figmaAssets/frame-21-3.png",
    discount: "40%",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: productColors,
  },
  {
    image: "/figmaAssets/frame-22-3.png",
    discount: "40%",
    title: "Office Formal | Men Formal Weare",
    price: "Rs. 11,300",
    originalPrice: "Rs. 11,300",
    colors: productColors,
  },
];

const thumbnailGrid = [
  {
    top: "top-[120px]",
    left: "left-3",
    src: "/figmaAssets/frame-76.svg",
    isImage: true,
  },
  { top: "top-[204px]", left: "left-3", isImage: false },
  { top: "top-72", left: "left-3", isImage: false },
  { top: "top-[120px]", left: "left-24", isImage: false },
  { top: "top-[204px]", left: "left-24", isImage: false },
  { top: "top-[120px]", left: "left-[180px]", isImage: false },
];

export const NewArrivalsInfoSection = (): JSX.Element => {
  return (
    <section className="w-full py-[92px] px-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(208,255,223,0.5)_100%)]">
      <div className="max-w-[1380px] mx-auto flex flex-col gap-[18px]">
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-[684px] h-[642px] bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)]">
            <Card className="absolute top-3 left-[360px] w-[312px] h-[372px] bg-white border-0 rounded-none">
              <CardContent className="p-3">
                <h2 className="[font-family:'Italiana',Helvetica] font-normal text-[50px] leading-[45px] text-black tracking-[0]">
                  New
                  <br />
                  Arrivals
                </h2>
                {thumbnailGrid.map((item, index) =>
                  item.isImage ? (
                    <img
                      key={`thumbnail-${index}`}
                      className={`absolute ${item.top} ${item.left} w-[72px] h-[72px]`}
                      alt="Frame"
                      src={item.src}
                    />
                  ) : (
                    <div
                      key={`thumbnail-${index}`}
                      className={`absolute ${item.top} ${item.left} w-[72px] h-[72px] bg-[#c7c7c7]`}
                    />
                  ),
                )}
              </CardContent>
            </Card>

            <img
              className="absolute top-3 left-9 w-[298px] h-[372px] object-cover"
              alt="Arknetic logo"
              src="/figmaAssets/arknetic-logo-2.png"
            />

            <p className="absolute top-96 left-[23px] w-[325px] [font-family:'Poppins',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex flex-col w-[684px] gap-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="bg-white px-0 py-0">
                  <h3 className="[font-family:'Poppins',Helvetica] font-extrabold text-base leading-normal text-black tracking-[0]">
                    New . Buzz
                  </h3>
                </div>
                <div className="bg-white px-0 py-0">
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-normal">
                    Explore our newest Office . Wear Collection
                  </p>
                </div>
              </div>

              <Button className="h-auto w-[101px] bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] hover:opacity-90 [font-family:'Inder',Helvetica] font-normal text-white text-base tracking-[0] leading-normal rounded-none">
                View All
              </Button>
            </div>

            <div className="flex items-center gap-[15px]">
              {topRowProducts.map((product, index) => (
                <Card
                  key={`top-product-${index}`}
                  className="w-[333px] border-0 rounded-none bg-transparent"
                >
                  <CardContent className="p-0">
                    <div
                      className="relative w-full h-[482px] bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      {product.discount && (
                        <Badge className="absolute top-2.5 left-2.5 w-12 h-6 flex items-center justify-center bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] rounded-none border-0">
                          <span className="[font-family:'Inder',Helvetica] font-normal text-white text-base tracking-[0] leading-normal whitespace-nowrap">
                            {product.discount}
                          </span>
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-col pl-2 pr-0 py-2">
                        <h4 className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-normal mb-0">
                          {product.title}
                        </h4>

                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center">
                            <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base tracking-[0] leading-normal">
                              {product.price}
                            </span>
                            <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base tracking-[0] leading-normal line-through ml-0">
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

                      <div className="flex items-center gap-2.5 px-2 py-0">
                        {product.colors.map((color, colorIndex) => (
                          <div
                            key={`color-${index}-${colorIndex}`}
                            className={`w-[25px] h-[25px] ${color.bg} rounded-full`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[15px] justify-center">
          {bottomRowProducts.map((product, index) => (
            <Card
              key={`bottom-product-${index}`}
              className="w-[333px] border-0 rounded-none bg-transparent"
            >
              <CardContent className="p-0">
                <div
                  className="relative w-full h-[482px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  {product.discount && (
                    <Badge className="absolute top-2.5 left-2.5 w-12 h-6 flex items-center justify-center bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(0,104,56,1)_0%,rgba(1,127,69,1)_24%,rgba(0,136,73,1)_50%,rgba(1,127,69,1)_75%,rgba(0,104,56,1)_100%)] rounded-none border-0">
                      <span className="[font-family:'Inder',Helvetica] font-normal text-white text-base tracking-[0] leading-normal whitespace-nowrap">
                        {product.discount}
                      </span>
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col pl-2 pr-0 py-2">
                    <h4 className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-normal mb-0">
                      {product.title}
                    </h4>

                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center">
                        <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base tracking-[0] leading-normal">
                          {product.price}
                        </span>
                        <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base tracking-[0] leading-normal line-through ml-0">
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

                  <div className="flex items-center gap-2.5 px-2 py-0">
                    {product.colors.map((color, colorIndex) => (
                      <div
                        key={`color-${index}-${colorIndex}`}
                        className={`w-[25px] h-[25px] ${color.bg} rounded-full`}
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
