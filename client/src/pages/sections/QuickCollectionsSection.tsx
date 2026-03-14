import { Card, CardContent } from "@/components/ui/card";

const collections = [
  {
    title: "Office",
    backgroundImage: "/figmaAssets/frame-30.png",
  },
  {
    title: "Formal",
    backgroundImage: "/figmaAssets/frame-31.png",
  },
];

export const QuickCollectionsSection = (): JSX.Element => {
  return (
    <section className="flex w-full mx-auto mt-[88px] gap-0">
      {collections.map((collection, index) => (
        <Card
          key={index}
          className="relative flex-1 h-[839px] border-0 rounded-none overflow-hidden group cursor-pointer"
          style={{
            backgroundImage: `url(${collection.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}
        >
          <CardContent className="relative h-full p-0 flex items-end justify-center pb-[112px]">
            <div className="w-[269px] h-[70px] flex items-center justify-center bg-white">
              <h3 className="[font-family:'Italiana',Helvetica] font-normal text-[#006838] text-[32px] tracking-[0] leading-normal">
                {collection.title}
              </h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
