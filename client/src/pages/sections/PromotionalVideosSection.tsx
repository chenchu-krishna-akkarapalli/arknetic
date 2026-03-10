import { Card, CardContent } from "@/components/ui/card";

export const PromotionalVideosSection = (): JSX.Element => {
  const decorativeImages = [
    {
      src: "/figmaAssets/frame-95.svg",
      alt: "Frame",
      className: "absolute top-36 left-[216px] w-60 h-60",
    },
    {
      src: "/figmaAssets/frame-96.svg",
      alt: "Frame",
      className: "absolute top-[627px] left-[984px] w-60 h-60",
    },
  ];

  const galleryImages = [
    {
      src: "/figmaAssets/group-2.png",
      alt: "Group",
      className: "absolute top-[35px] left-[13px] w-[364px] h-[391px]",
    },
    {
      src: "/figmaAssets/group-1.png",
      alt: "Group",
      className: "absolute top-[25px] left-[331px] w-[364px] h-[393px]",
    },
  ];

  const centerFrameImages = [
    {
      src: "/figmaAssets/rectangle-3.png",
      alt: "Rectangle",
      className: "absolute -top-6 -left-6 w-[348px] h-[493px]",
    },
    {
      src: "/figmaAssets/frame-18.png",
      alt: "Frame",
      className: "absolute top-[392px] left-[247px] w-[41px] h-[39px]",
    },
    {
      src: "/figmaAssets/frame-92-1.png",
      alt: "Frame",
      className: "absolute top-[13px] left-[248px] w-[41px] h-[39px]",
    },
    {
      src: "/figmaAssets/frame-91-1.png",
      alt: "Frame",
      className: "absolute top-[392px] left-[15px] w-[154px] h-10",
    },
  ];

  const navigationImages = [
    {
      src: "/figmaAssets/frame-93-1.png",
      alt: "Frame",
      className: "absolute top-[172px] left-[637px] w-[61px] h-[58px]",
    },
    {
      src: "/figmaAssets/frame-94.png",
      alt: "Frame",
      className: "absolute top-[161px] left-0 w-[61px] h-[58px]",
    },
  ];

  return (
    <section className="relative w-full bg-[#e8ffef] py-24 px-4">
      {decorativeImages.map((image, index) => (
        <img
          key={`decorative-${index}`}
          className={image.className}
          alt={image.alt}
          src={image.src}
        />
      ))}

      <div className="container mx-auto max-w-[1438px]">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center">
            <h2 className="[font-family:'Italiana',Helvetica] font-normal text-[#006838] text-8xl tracking-[-3.84px] leading-normal mb-8">
              Lore pores
            </h2>

            <div className="flex flex-col items-center gap-2">
              <p className="[font-family:'Poppins',Helvetica] font-extrabold text-[#006838] text-base tracking-[0] leading-normal">
                Reviews From Our Costumers
              </p>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#006838] text-base tracking-[0] leading-normal">
                share you happiness
              </p>
            </div>
          </div>

          <Card className="relative w-full max-w-[698px] h-[445px] bg-transparent border-0 shadow-none">
            <CardContent className="relative w-full h-full p-0">
              {galleryImages.map((image, index) => (
                <img
                  key={`gallery-${index}`}
                  className={image.className}
                  alt={image.alt}
                  src={image.src}
                />
              ))}

              <div className="absolute top-0 left-[202px] w-[300px] h-[445px]">
                {centerFrameImages.map((image, index) => (
                  <img
                    key={`center-${index}`}
                    className={image.className}
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
              </div>

              {navigationImages.map((image, index) => (
                <img
                  key={`navigation-${index}`}
                  className={image.className}
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
