// import { Card } from "@/components/ui/card"
// import { Wrench, Home, Building, Truck } from "lucide-react"

// export function Services() {
//   const services = [
//     {
//       icon: Wrench,
//       title: "خدمات الصيانة",
//       description: "فريق متخصص في أعمال الصيانة والإصلاح",
//     },
//     {
//       icon: Home,
//       title: "خدمات منزلية",
//       description: "عمالة منزلية مدربة ومؤهلة",
//     },
//     {
//       icon: Building,
//       title: "مشاريع البناء",
//       description: "عمالة بناء محترفة لجميع المشاريع",
//     },
//     {
//       icon: Truck,
//       title: "خدمات النقل",
//       description: "سائقون محترفون وعمالة نقل",
//     },
//   ]

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <div className="inline-block bg-[oklch(0.6_0.2_200)]/10 text-[oklch(0.6_0.2_200)] font-semibold px-4 py-2 rounded-full mb-4">
//             خدماتنا المتميزة
//           </div>
//           <h2 className="text-4xl font-bold text-balance">حلول شاملة لجميع احتياجاتك من العمالة</h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-[oklch(0.6_0.2_200)]/30 group"
//             >
//               <div className="bg-gradient-to-br from-[oklch(0.6_0.2_200)]/10 to-[oklch(0.5_0.2_220)]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
//                 <service.icon className="h-8 w-8 text-[oklch(0.6_0.2_200)]" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 group-hover:text-[oklch(0.6_0.2_200)] transition-colors">
//                 {service.title}
//               </h3>
//               <p className="text-muted-foreground leading-relaxed">{service.description}</p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { Card } from "@/components/ui/card";
import { Wrench, Home, Building, Truck, ArrowLeft,Users } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Building,
      title: "المقاولات والبناء",
      description:
"عمالة ماهرة في البناء والتشييد والمقاولات"    },
    {
      icon: Home,
      title: "الخدمة المنزلية",
      description:
"عاملات منزليات مدربات وموثوقات"
    },
    {
      icon: Building,
      title: "الرعاية الصحية",
      description:
"ممرضين ومساعدي رعاية صحية مؤهلين"    },
    {
      icon: Truck,
      title: "الضيافة والفنادق",
      description: "طاقم فندقي محترف ومدرب",
    },
        {
      icon: Wrench,
      title: "التصنيع والصيانة",
      description: "فنيين وعمال صيانة متخصصين",
    },
            {
      icon: Users,
      title: "الإدارة والمكاتب",
      description: "موظفين إداريين وسكرتارية",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-6">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-6 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full ml-2 animate-pulse"></span>
            خدماتنا المتخصصة
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            حلول <span className="text-primary">شمولية</span> تغطي جميع متطلباتك
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            نقدم مجموعة متكاملة من خدمات توفير العمالة المدربة لتلبية احتياجات
            القطاعات المختلفة
          </p>
        </div>

        {/* بطاقات الخدمات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-200/60 group relative overflow-hidden bg-white"
            >
              {/* تأثير الخلفية */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* الأيقونة */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-primary/20">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>

                {/* العنوان والوصف */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>

                {/* زر المزيد */}
                <div className="flex items-center text-primary font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                  <span>اكتشف المزيد</span>
                  <ArrowLeft className="h-5 w-5 mr-2 group-hover:mr-3 transition-all duration-300" />
                </div>
              </div>

              {/* تأثير الزاوية */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* قسم إضافي */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            لا تجد الخدمة التي تبحث عنها؟
            <span className="text-primary font-semibold mr-2">
              {" "}
              فريقنا جاهز لمساعدتك
            </span>
          </p>
          <button className="inline-flex items-center bg-primary/10 text-primary font-semibold px-6 py-3 rounded-full hover:bg-primary/20 transition-all duration-300 border border-primary/20">
            استشارة مجانية مخصصة
            <Wrench className="h-5 w-5 mr-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
