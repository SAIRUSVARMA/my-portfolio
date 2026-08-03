import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToSection = (id) => {
    navigate("/"); // go to home first

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-dark/70 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          className="font-bold text-lg cursor-pointer"
          onClick={() => navigate("/")}
        >
          Sairus
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <button
            className="hover:text-primary transition"
            onClick={() => goToSection("projects")}
          >
            Projects
          </button>

          <button
            className="hover:text-primary transition"
            onClick={() => goToSection("experience")}
          >
            Experience
          </button>

          <button
            className="hover:text-primary transition"
            onClick={() => goToSection("journey")}
          >
            Journey
          </button>

          <button
            className="hover:text-primary transition"
            onClick={() => goToSection("contact")}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-dark border-t border-gray-800 flex flex-col items-center py-4 gap-4">
          <button onClick={() => goToSection("projects")}>Projects</button>
          <button onClick={() => goToSection("experience")}>Experience</button>
          <button onClick={() => goToSection("journey")}>Journey</button>
          <button onClick={() => goToSection("contact")}>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
