import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Eleanor Pena",
    role: "Verified Buyer",
    content:
      "The quality of the office wear collection is absolutely unmatched. The fabric feels premium, and the fit is tailored to perfection. Arknetic has completely elevated my work wardrobe!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    role: "Fashion Blogger",
    content:
      "I'm in love with the new buzz collection. Every piece is an artistic statement. The attention to detail and modern silhouette makes it perfect for both corporate meetings and evening events.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Courtney Henry",
    role: "Verified Buyer",
    content:
      "Shopping here was a delightful experience. The designer wear fits effortlessly and looks incredibly chic. I regularly receive compliments whenever I wear their pieces to the office.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
];

export const PromotionalVideosSection = (): JSX.Element => {
  return (
    <section className="w-full py-[92px] px-4 bg-[#E8FFEF] relative overflow-hidden">
      <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 35s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-[rgba(0,104,56,0.06)] blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[400px] h-[400px] rounded-full bg-[rgba(0,104,56,0.06)] blur-3xl" />
      </div>

      <div className="w-full max-w-[1381px] mx-auto relative z-10 flex flex-col gap-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="[font-family:'Italiana',Helvetica] font-normal text-[#006838] text-[64px] leading-tight mb-4">
            Client Diaries
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-lg max-w-2xl">
            Discover how Arknetic is transforming everyday fashion with elegance and premium quality. Real stories from our beloved community.
          </p>
        </div>

        <div className="flex items-center justify-between gap-[40px] w-full">
          {/* Left Column: Horizontal Scrolling Marquee */}
          <div className="flex-1 overflow-hidden relative w-full mask-edges" style={{ maxWidth: 'calc(1381px - 540px)' }}>
            <div className="flex w-max animate-infinite-scroll gap-[30px] py-6">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={`testim-${index}`}
                  className="w-[450px] flex-shrink-0 bg-white/80 backdrop-blur-lg border border-[rgba(0,104,56,0.1)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,104,56,0.08)] transition-all duration-500 hover:-translate-y-2 rounded-2xl"
                >
                  <CardContent className="p-[30px] flex flex-col h-full justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]"
                          />
                        ))}
                      </div>
                      <p className="[font-family:'Poppins',Helvetica] font-light text-gray-700 text-lg leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[rgba(0,0,0,0.05)]">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[rgba(0,104,56,0.2)]"
                      />
                      <div className="flex flex-col">
                        <h4 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base">
                          {testimonial.name}
                        </h4>
                        <span className="[font-family:'Poppins',Helvetica] font-normal text-[#006838] text-sm">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Fade overlays for smooth scrolling entrance/exit */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#E8FFEF] to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#E8FFEF] to-transparent pointer-events-none z-10" />
          </div>

          {/* Right Column: Product Image */}
          <div className="w-[500px] shrink-0 border-0">
            <img
              className="w-[500px] h-[750px] object-cover rounded-none"
              alt="Testimonial Designer Wear"
              src="/Assets/testimonial-product.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
