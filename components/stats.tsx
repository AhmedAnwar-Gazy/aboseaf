import { Users, Briefcase, Building2 } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Users,
      number: "518",
      label: "عامل متاح",
      color: "bg-blue-800",
    },
    {
      icon: Briefcase,
      number: "1274",
      label: "طلب مكتمل",
      color: "bg-blue-800",
    },
    {
      icon: Building2,
      number: "113",
      label: "شركة مسجلة",
      color: "bg-blue-800",
    },
  ];

  return (
    <section className="py-12 -mt-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} text-white p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between relative z-10">
                <div>
                  <div className="text-5xl font-bold mb-2 drop-shadow-md">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium">{stat.label}</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <stat.icon className="h-12 w-12" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
