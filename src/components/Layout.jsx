// src/components/Layout.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#D98969] text-white shadow z-50 relative">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            💼 My Portfolio
          </Link>

          {/* Hamburger */}
          <button
            className="sm:hidden text-white"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex space-x-6 flex items-center">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <div className="relative">
              <button
                className="hover:underline"
                onClick={() => setProjectsOpen((prev) => !prev)}
              >
                Projects ▾
              </button>
              {projectsOpen && (
                <ul className="absolute bg-black text-gray-900 rounded shadow top-full mt-1 px-4 py-4 w-56">
                  <li>
                    <Link
                      to="/projects/js-frameworks"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        setTimeout(() => setProjectsOpen(false), 100)
                      }
                    >
                      JavaScript Frameworks
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/semester-project-2"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        setTimeout(() => setProjectsOpen(false), 100)
                      }
                    >
                      Semester Project 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/exam-project-2"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        setTimeout(() => setProjectsOpen(false), 100)
                      }
                    >
                      Exam Project 2
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Nav */}
        {navOpen && (
          <div
            ref={navRef}
            className="sm:hidden bg-[#D98969] px-4 pb-4 space-y-2"
          >
            <Link to="/" onClick={() => setNavOpen(false)} className="block">
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setNavOpen(false)}
              className="block"
            >
              About
            </Link>
            <div>
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="w-full text-left"
              >
                Projects ▾
              </button>
              {projectsOpen && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/projects/js-frameworks"
                      onClick={() => {
                        setNavOpen(false);
                        setTimeout(() => setProjectsOpen(false), 100); // delay to allow navigation
                      }}
                      className="block"
                    >
                      JavaScript Frameworks
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/semester-project-2"
                      onClick={() => {
                        setNavOpen(false);
                        setTimeout(() => setProjectsOpen(false), 100); // delay to allow navigation
                      }}
                      className="block"
                    >
                      Semester Project 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/exam-project-2"
                      onClick={() => {
                        setNavOpen(false);
                        setTimeout(() => setProjectsOpen(false), 100); // delay to allow navigation
                      }}
                      className="block"
                    >
                      Exam Project 2
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="text-center text-sm py-6 bg-gray-50 text-gray-600">
        &copy; {new Date().getFullYear()} Romelyn Resell — All rights reserved.
      </footer>
    </div>
  );
}
