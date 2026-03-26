import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

function App() {
  return (
    <div className="dark">
      <Navbar />
      <SideNav />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;
