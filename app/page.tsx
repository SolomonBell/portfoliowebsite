import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
