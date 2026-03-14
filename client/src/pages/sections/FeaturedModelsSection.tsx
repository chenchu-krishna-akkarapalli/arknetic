import { Card, CardContent } from "@/components/ui/card";

const featuredModels = [
  {
    id: "women",
    label: "Women",
    backgroundImage: "url(/Assets/featured-model-left.avif)",
  },
  {
    id: "men",
    label: "Men",
    backgroundImage: "url(/Assets/featured-model-right.avif)",
  },
];

export const FeaturedModelsSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1381px] mx-auto py-8 px-4 flex flex-col items-start gap-4">
      <header className="flex flex-col items-start gap-2 w-full">
        <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-black text-base tracking-[0] leading-normal">
          New . Buzz
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-normal">
          Explore our newest Office . Wear Collection
        </p>
      </header>

      <div className="flex justify-between w-full mt-2">
        {featuredModels.map((model) => (
          <Card
            key={model.id}
            className="relative w-[690px] h-[840px] overflow-hidden border-0 rounded-none bg-cover bg-center bg-no-repeat"
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
