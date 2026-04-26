import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import DevTinder from "./pages/DevTinder";
import NetflixGPT from "./pages/NetflixGPT";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="pt-20">
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Journey />
                <About />
                <Contact />
              </>
            }
          />

          {/* DEV TINDER PAGE */}
          <Route path="/devtinder" element={<DevTinder />} />
          <Route path="/netflixgpt" element={<NetflixGPT />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
