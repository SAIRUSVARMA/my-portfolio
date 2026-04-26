import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-dark/70 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="font-bold text-lg">Sairus</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <button
            className="hover:text-primary transition"
            onClick={() => scrollTo("projects")}
          >
            Projects
          </button>
          <button
            className="hover:text-primary transition"
            onClick={() => scrollTo("journey")}
          >
            Journey
          </button>
          <button
            className="hover:text-primary transition"
            onClick={() => scrollTo("contact")}
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
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("journey")}>Journey</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
