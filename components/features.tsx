// import { Check } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export function Features() {
//   const features = [
//     "خدمة عملاء متميزة",
//     "عمالة مدربة ومؤهلة",
//     "أسعار تنافسية",
//     "توفير سريع للعمالة",
//     "ضمان الجودة",
//     "دعم فني متواصل",
//   ]

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="relative group">
//             <div className="absolute -inset-4 bg-gradient-to-r from-[oklch(0.6_0.2_200)]/20 to-[oklch(0.5_0.2_220)]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//             <img
//               src="/business-professionals-meeting.png"
//               alt="Features"
//               className="rounded-2xl shadow-2xl w-full relative z-10 group-hover:scale-[1.02] transition-transform duration-300"
//             />
//           </div>

//           <div>
//             <div className="inline-block bg-[oklch(0.6_0.2_200)]/10 text-[oklch(0.6_0.2_200)] font-semibold px-4 py-2 rounded-full mb-4">
//               لماذا تختارنا
//             </div>
//             <h2 className="text-4xl font-bold mb-6 text-balance leading-tight">
//               خبرة +10 سنوات في توفير عمالة مدربة ومرخصة
//             </h2>

//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-2 group/item">
//                   <div className="bg-[oklch(0.6_0.2_200)]/10 p-1 rounded-full group-hover/item:bg-[oklch(0.6_0.2_200)]/20 transition-colors">
//                     <Check className="h-5 w-5 text-[oklch(0.6_0.2_200)] flex-shrink-0" />
//                   </div>
//                   <span className="group-hover/item:text-[oklch(0.6_0.2_200)] transition-colors">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
//               نحن نقدم أفضل الحلول لتوفير العمالة المدربة والمؤهلة لجميع القطاعات. فريقنا المتخصص يضمن لك الحصول على
//               أفضل الكفاءات.
//             </p>

//             <div className="flex gap-4">
//               <Button
//                 className="bg-[oklch(0.6_0.2_200)] hover:bg-[oklch(0.55_0.2_200)] shadow-lg hover:shadow-xl transition-all hover:scale-105"
//                 size="lg"
//               >
//                 اطلب الآن
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 hover:border-[oklch(0.6_0.2_200)] hover:text-[oklch(0.6_0.2_200)] transition-all hover:scale-105 bg-transparent"
//               >
//                 تواصل معنا
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Features() {
  const features = [
    "خدمة عملاء متميزة على مدار الساعة",
    "عمالة مدربة ومعتمدة بأعلى المعايير",
    "أسعار تنافسية مع مرونة في الدفع",
    "توفير سريع للعمالة خلال 24 ساعة",
    "ضمان الجودة ومتابعة مستمرة",
    "دعم فني واستشاري متواصل",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* الصورة */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <img
              src="/business-professionals-meeting.png"
              alt="فريق العمل المحترف"
              className="rounded-2xl shadow-2xl w-full relative z-10 group-hover:scale-[1.02] transition-transform duration-500 object-cover"
            />
          </div>

          {/* المحتوى */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-2 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full ml-2 animate-pulse"></span>
              لماذا نحن الخيار الأمثل
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              أكثر من <span className="text-primary">10 سنوات</span> من الخبرة
              في توفير الكفاءات
            </h2>

            {/* المميزات */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors mt-0.5">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-gray-700 group-hover:text-primary transition-colors font-medium leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* الوصف */}
            <p className="text-lg text-gray-600 leading-relaxed">
              نتميز بتقديم حلول متكاملة لتوفير العمالة المدربة والمؤهلة لجميع
              القطاعات. نضمن لك كفاءة عالية من خلال فريق مختص يختار أفضل
              الكفاءات ويناسبها مع متطلبات عملك.
            </p>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-3 text-lg font-semibold"
                size="lg"
              >
                ابدأ مشروعك الآن
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-primary hover:text-primary text-gray-700 transition-all duration-300 hover:scale-105 px-8 py-3 text-lg font-semibold"
              >
                استشارة مجانية
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
