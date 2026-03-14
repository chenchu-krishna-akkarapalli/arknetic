import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ProductCardProps = {
  image: string;
  title: string;
  price: string;
  originalPrice?: string | null;
  discount?: string | null;
  className?: string;
};

export const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  className,
}: ProductCardProps): JSX.Element => {
  return (
    <Card className={cn("border-0 shadow-none rounded-none bg-transparent", className)}>
      <CardContent className="p-0">
        <div className="relative w-full overflow-hidden bg-gray-50 mb-4 aspect-[447/482]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {discount && (
            <Badge className="absolute top-2.5 left-2.5 h-6 px-3 flex items-center justify-center bg-[#006838] border-0 text-white rounded-none">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[11px] tracking-wider whitespace-nowrap">
                {discount}
              </span>
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-1 px-1">
          <h4 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[15px] truncate">
            {title}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-black">
              {price}
            </span>
            {originalPrice && (
              <span className="[font-family:'Poppins',Helvetica] font-normal text-[#BCBCBC] text-sm line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
