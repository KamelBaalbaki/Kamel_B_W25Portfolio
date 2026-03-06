import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Experience } from "@/sections/Experience"
import { Testimonials } from "@/sections/Testimonials"
import { Contact } from "@/sections/Contact"
import { Footer } from "@/layout/Footer"
import { Dots } from "@/components/Dots";

function App() {
  return (
   <div className="min-h-screen overflow-x-hidden relative bg-background text-foreground">

    <Dots />
    <Navbar />
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
   </div>
  )
}

export default App
