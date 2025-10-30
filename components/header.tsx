// import { Button } from "@/components/ui/button";
// import { Menu, Phone, Mail } from "lucide-react";
// import Link from "next/link"; // إذا كنت تستخدم Next.js

// export function Header() {
//   return (
//     <header className="bg-[oklch(0.25_0.05_250)] text-white sticky top-0 z-50">
//       {/* Top bar with contact info */}
//       <div className="bg-[oklch(0.2_0.05_250)] py-2 text-sm">
//         <div className="container mx-auto px-4 flex items-center justify-between">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Phone className="h-4 w-4" />
//               <span>+966 123 456 789</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="h-4 w-4" />
//               <span>info@workersforrent.com</span>
//             </div>
//           </div>
//           <div className="text-[oklch(0.6_0.2_200)]">مرحباً بك في نظام أجور</div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2" aria-label="الصفحة الرئيسية">
//             <div className="bg-[oklch(0.6_0.2_200)] px-3 py-1 rounded">
//               <span className="text-xl font-bold">WORKERS</span>
//             </div>
//           </Link>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             {["الرئيسية", "من نحن", "خدماتنا", "المدونة", "اتصل بنا"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 // onClick={(e) => e.preventDefault()}
//                 className="hover:text-[oklch(0.6_0.2_200)] transition-colors"
//                 aria-label={item}
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-3">
//             <Button variant="ghost" className="text-white hover:bg-white/10">
//               تسجيل الدخول
//             </Button>
//             <Button className="bg-[oklch(0.6_0.2_200)] hover:bg-[oklch(0.55_0.2_200)] text-white">
//               التسجيل
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden"
//               aria-label="فتح القائمة"
//             >
//               <Menu className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }








import { Button } from "@/components/ui/button";
import {
  Menu,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  User,
  ChevronDown,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";


export function Header() {
  const navigationItems = [
    { label: "الرئيسية", href: "/" },
    {
      label: "خدماتنا",
      href: "/services",
      submenu: [
        { label: "خدمات الصيانة", href: "/services/maintenance" },
        { label: "الخدمات المنزلية", href: "/services/domestic" },
        { label: "مشاريع البناء", href: "/services/construction" },
        { label: "خدمات النقل", href: "/services/transport" },
      ],
    },
    { label: "التخصصات", href: "/specializations" },
    { label: "العمالة المتوفرة", href: "/workers" },
    { label: "باقات الأسعار", href: "/pricing" },
    { label: "المدونة", href: "/blog" },
    { label: "اتصل بنا", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      {/* الشريط العلوي */}
      <div className="bg-gradient-to-r from-primary to-blue-600 py-3 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* معلومات التواصل */}
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Phone className="h-4 w-4" />
                <span className="text-xs font-medium" dir="ltr">+966 12 345 6789</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4" />
                <span className="text-xs font-medium">
                  أحد- خميس: 8 ص - 5 م
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* التنقل الرئيسي */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* الشعار */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="الصفحة الرئيسية"
          >
            <div className="bg-gradient-to-br from-primary to-blue-600 p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                ABOSYAF
              </span>
              <span className="text-xs text-gray-500 -mt-1">
                نظام أجور للعمالة
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {["الرئيسية", "من نحن", "خدماتنا", "المدونة", "اتصل بنا"].map((item) => (
              <a
                key={item}
                href="#"
                // onClick={(e) => e.preventDefault()}
                className="hover:text-[oklch(0.6_0.2_200)] transition-colors"
                aria-label={item}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* أزرار المستخدم */}
          <div className="flex items-center gap-3">
            {/* <Button
              variant="outline"
              className="hidden md:flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
            >
              <User className="h-4 w-4" />
              تسجيل الدخول
            </Button>

            <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
              اشترك الآن
            </Button> */}

            {/* زر القائمة للموبايل */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden border border-gray-300 hover:bg-gray-50"
                  aria-label="فتح القائمة"
                >
                  <Menu className="h-5 w-5 text-gray-700" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle  className="left pt-5">القائمة</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col mt-4 gap-3">
                  {["الرئيسية", "من نحن", "خدماتنا", "المدونة", "اتصل بنا"].map((item) => (
                    <Link key={item} href="#" className="text-gray-700 hover:text-primary font-medium px-2 py-1 rounded transition-colors">
                      {item}
                    </Link>
                  ))}
                </nav>


              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* شريط إضافي للموبايل */}
      {/* <div className="lg:hidden bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between overflow-x-auto gap-4">
            {navigationItems.slice(0, 4).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-gray-700 hover:text-primary font-medium whitespace-nowrap px-3 py-1 hover:bg-white rounded-full transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div> */}
      <div className="flex items-center gap-3">
  
</div>

    </header>
  );
}
