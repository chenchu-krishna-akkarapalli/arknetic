import { Card, CardContent } from "@/components/ui/card";

const featuredModels = [
  {
    id: "women",
    label: "Women",
    backgroundImage: "url(/figmaAssets/frame-30.png)",
  },
  {
    id: "men",
    label: "Men",
    backgroundImage: "url(/figmaAssets/frame-24.png)",
  },
];

export const FeaturedModelsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2 w-full max-w-[1380px] mx-auto mt-[30px] px-4">
      <header className="flex flex-col items-start gap-2 w-full max-w-[447px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-black text-base tracking-[0] leading-normal">
          New . Buzz
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-normal">
          Explore our newest Office . Wear Collection
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full mt-2">
        {featuredModels.map((model) => (
          <Card
            key={model.id}
            className="relative h-[839px] overflow-hidden border-0 rounded-none bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: model.backgroundImage }}
          >
            <CardContent className="flex items-end justify-center h-full p-0">
              <div className="flex items-center justify-center bg-white w-[269px] h-[70px] mb-[182px]">
                <span className="[font-family:'Italiana',Helvetica] text-[#006838] text-[32px] leading-normal font-normal tracking-[0] whitespace-nowrap">
                  {model.label}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
