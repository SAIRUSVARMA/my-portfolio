import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="pt-20">
      <Navbar />
      <Hero />
      <Projects />
      <Journey />
      <About />
      <Contact />
    </div>
  );
}

export default App;
