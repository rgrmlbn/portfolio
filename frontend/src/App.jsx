import NavBar from "./components/layout/Navbar";
import Hero from "./components/sections/HeroSection";
import Skills from "./components/sections/SkillSection"; 
import Projects from "./components/sections/ProjectSection";
import Contact from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App;

