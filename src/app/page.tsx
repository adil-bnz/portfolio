import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

