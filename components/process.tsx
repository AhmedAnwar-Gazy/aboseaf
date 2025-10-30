export function Process() {
  const steps = [
    { number: "1", title: "التسجيل", icon: "📝" },
    { number: "2", title: "اختيار الخدمة", icon: "🎯" },
    { number: "3", title: "تحديد المتطلبات", icon: "📋" },
    { number: "4", title: "المراجعة", icon: "✅" },
    { number: "5", title: "الدفع", icon: "💳" },
    { number: "6", title: "التنفيذ", icon: "🚀" },
    { number: "7", title: "المتابعة", icon: "📊" },
    { number: "8", title: "التقييم", icon: "⭐" },
    { number: "9", title: "الدعم", icon: "🤝" },
    { number: "10", title: "الضمان", icon: "🛡️" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-[oklch(0.6_0.2_200)] font-semibold mb-2">كيف نعمل</div>
          <h2 className="text-3xl font-bold text-balance">عملية بسيطة ومباشرة لتوفير العمالة</h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[oklch(0.6_0.2_200)]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[oklch(0.6_0.2_200)]">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="text-sm font-semibold text-[oklch(0.6_0.2_200)] mb-1">{step.number}</div>
                <div className="font-semibold">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
