import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Specializations } from "@/components/specializations"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"




export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Specializations />
      <Contact />
      <Footer />
    </main>
  )
}
