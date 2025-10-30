import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <div dir="rtl" className="relative">
      <Carousel
        opts={{
          direction: "rtl",
          loop: true,
        }}
        className="w-full max-w-8xl"
      >
        <CarouselContent>
          {/* === السلايد 1 === */}
          <CarouselItem className="relative w-full">
            <img
              src="/images/2.jpg"
              alt="صورة 1"
              className={cn("w-full object-cover h-[450px] rounded-lg")}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
              <h2 className="text-3xl font-bold mb-2">مرحبا بك في موقعنا</h2>
              <p className="text-lg">
                أفضل مكان لاكتشاف أحدث المنتجات التقنية.
              </p>
            </div>
          </CarouselItem>

          {/* === السلايد 2 === */}
          <CarouselItem className="relative w-full">
            <img
              src="/images/OIP.webp"
              alt="صورة 2"
              className={cn("w-full object-cover h-[450px] rounded-lg")}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
              <h2 className="text-3xl font-bold mb-2">منتجات عالية الجودة</h2>
              <p className="text-lg">نوفر لك الأفضل دائماً بأحدث التقنيات.</p>
            </div>
          </CarouselItem>

          {/* === السلايد 3 === */}
          <CarouselItem className="relative w-full">
            <img
              src="/images/3.jpg"
              alt="صورة 3"
              className={cn("w-full object-cover h-[450px] rounded-lg")}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
              <h2 className="text-3xl font-bold mb-2">تجربة تسوق ممتعة</h2>
              <p className="text-lg">كل ما تحتاجه في مكان واحد.</p>
            </div>
          </CarouselItem>

          {/* === السلايد 4 === */}
          <CarouselItem className="relative w-full">
            <img
              src="/images/OIP2.webp"
              alt="صورة 4"
              className={cn("w-full object-cover h-[450px] rounded-lg")}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
              <h2 className="text-3xl font-bold mb-2">انضم إلينا اليوم</h2>
              <p className="text-lg">واستفد من عروضنا الخاصة والمميزة.</p>
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* الأسهم */}
        <div className="absolute top-3/4 left-5 flex gap-2 p-2 z-10 -translate-y-1/2">
          <CarouselNext className="border border-gray-200 bg-white/70 backdrop-blur-sm static h-15 w-15 rounded-full hover:bg-gray-100 flex items-center justify-center transition" />
          <CarouselPrevious className="border border-gray-200 bg-white/70 backdrop-blur-sm static h-15 w-15 rounded-full hover:bg-gray-100 flex items-center justify-center transition" />
        </div>
      </Carousel>
    </div>
  );
}
