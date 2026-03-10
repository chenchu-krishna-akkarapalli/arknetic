export const NewArrivalsGallerySection = (): JSX.Element => {
  const galleryItems = [
    {
      id: 1,
      backgroundImage: "url(/figmaAssets/frame-30.png)",
      label: "Western",
    },
    {
      id: 2,
      backgroundImage: "url(/figmaAssets/frame-31.png)",
      label: "Designed",
    },
  ];

  return (
    <section className="flex w-full z-[2] relative">
      <div className="grid grid-cols-2 w-full">
        {galleryItems.map((item) => (
          <article
            key={item.id}
            className="relative w-full h-[839px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: item.backgroundImage }}
          >
            <div className="absolute bottom-[182px] left-1/2 -translate-x-1/2 w-[269px] h-[70px] flex items-center justify-center bg-white">
              <h3 className="[font-family:'Italiana',Helvetica] font-normal text-[#006838] text-[32px] tracking-[0] leading-normal whitespace-nowrap">
                {item.label}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
