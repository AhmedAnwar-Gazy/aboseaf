export function Footer() {
  return (
    <footer className="bg-[oklch(0.25_0.05_250)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="bg-[oklch(0.6_0.2_200)] px-3 py-1 rounded inline-block mb-4">
              <span className="text-xl font-bold">ABOSYAF</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">نظام أجور لتوفير عمالة مرخصة ومدربة لجميع القطاعات</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-[oklch(0.6_0.2_200)]">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[oklch(0.6_0.2_200)]">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[oklch(0.6_0.2_200)]">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[oklch(0.6_0.2_200)]">
                  المدونة
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">الخدمات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-[oklch(0.6_0.2_200)]">
                  عمالة منزلية
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[oklch(0.6_0.2_200)]">
                  عمالة بناء
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[oklch(0.6_0.2_200)]">
                  عمالة صيانة
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[oklch(0.6_0.2_200)]">
                  عمالة نقل
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>+966 50 033 9272</li>
              <li>info@ABOSYAF.com</li>
              <li>الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© 20250 ABOSYAF. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
