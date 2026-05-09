import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen retro-flicker">
      {/* CSS-only retro overlays */}
      <div className="retro-scanlines" />
      <div className="retro-grain" />

      <Navbar />

      <main id="home">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
