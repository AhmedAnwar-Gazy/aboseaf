import { Card } from "@/components/ui/card";
import {
  Hammer,
  Zap,
  Wrench,
  Drill,
  Sparkles,
  Car,
  ChefHat,
  Shield,
  Trees,
  Wind,
  Factory,
  Package,
  Users,
  BadgeCheck,
} from "lucide-react";

export function Specializations() {
  const specializations = [
    { title: "عمال بناء محترفون", icon: Hammer, count: "250+" },
    { title: "فنيو كهرباء معتمدون", icon: Zap, count: "180+" },
    { title: "سباكون متخصصون", icon: Wrench, count: "150+" },
    { title: "نجارون محترفون", icon: Drill, count: "120+" },
    { title: "فرق نظافة متكاملة", icon: Sparkles, count: "300+" },
    { title: "سائقون محترفون", icon: Car, count: "200+" },
    { title: "طهاة متخصصون", icon: ChefHat, count: "80+" },
    { title: "حراس أمن مدربون", icon: Shield, count: "100+" },
    { title: "عمال تنسيق حدائق", icon: Trees, count: "90+" },
    { title: "فنيو تكييف وتبريد", icon: Wind, count: "110+" },
    { title: "عمال إنتاج ومصانع", icon: Factory, count: "400+" },
    { title: "عمال مستودعات ومخازن", icon: Package, count: "250+" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/80">
      <div className="container mx-auto px-6">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-6 border border-primary/20">
            <BadgeCheck className="h-5 w-5 ml-2" />
            التخصصات المتوفرة
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            أكثر من <span className="text-primary">50+</span> تخصصاً لتلبية جميع
            احتياجاتك
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            نوفر كوادر بشرية مدربة ومعتمدة عبر نظام مرن يناسب جميع الميزانيات مع
            ضمان الجودة والأداء
          </p>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">2,340+</div>
            <div className="text-gray-600 text-sm">عامل متوفر</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <BadgeCheck className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600 text-sm">تخصص مختلف</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">100%</div>
            <div className="text-gray-600 text-sm">عمالة مدربة</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">24/7</div>
            <div className="text-gray-600 text-sm">دعم فني</div>
          </div>
        </div>

        {/* شبكة التخصصات */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {specializations.map((spec, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-200/60 group bg-white relative overflow-hidden"
            >
              {/* تأثير الخلفية */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* المحتوى */}
              <div className="relative z-10">
                {/* الأيقونة */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-primary/20">
                  <spec.icon className="h-7 w-7 text-primary" />
                </div>

                {/* العنوان */}
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 text-lg leading-tight">
                  {spec.title}
                </h3>

                {/* عدد العمال المتوفرين */}
                <div className="text-sm text-gray-500 font-medium bg-gray-100/50 rounded-full px-3 py-1 inline-block group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                  {spec.count} عامل
                </div>
              </div>

              {/* تأثير الزاوية */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* دعوة للعمل */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/5 to-blue-100/20 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            لم تجد التخصص الذي تبحث عنه؟
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            فريقنا جاهز لتوفير أي تخصص تحتاجه. اتصل بنا وسنقوم بتوفير الكفاءات
            المناسبة لمتطلباتك الخاصة
          </p>
          <button className="inline-flex items-center bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            طلب تخصص مخصص
            <Users className="h-5 w-5 mr-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
