import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import Credentials from "@/components/sections/Credentials"
import Contact from "@/components/sections/Contact"
import ChatWidget from "@/components/ui/ChatWidget"
import Footer from "@/components/ui/Footer"
import GalaxyBackground from "@/components/ui/GalaxyBackground"
import Navbar from "@/components/ui/Navbar"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05070f] text-white">
      <GalaxyBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
